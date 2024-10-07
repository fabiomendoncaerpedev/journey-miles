import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { UfService } from './uf.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { SearchData } from '../types/types';

@Injectable()
export class FormSearchService {

  private formSearch: FormGroup;

  constructor(
    private dialog: MatDialog,
    public ufService: UfService
  ) {
    const oneWayTicket = new FormControl(false, [Validators.required]);
    const arrivalDate = new FormControl(null, [Validators.required]);

    this.formSearch = new FormGroup({
      oneWayTicket,
      origin: new FormControl(null, [Validators.required]),
      destiny: new FormControl(null, [Validators.required]),
      type: new FormControl('Econômica'),
      adults: new FormControl(0),
      children: new FormControl(0),
      babies: new FormControl(0),
      arrivalDate,
      departureDate: new FormControl(null, [Validators.required]),
      connections: new FormControl(null)
    })

    oneWayTicket.valueChanges.subscribe((oneWayTicket) => {
      if (oneWayTicket) {
        arrivalDate.disable();
        arrivalDate.setValidators(null);
      } else {
        arrivalDate.enable();
        arrivalDate.setValidators([Validators.required])
      }

      arrivalDate.updateValueAndValidity();
    });
  }

  getPassengerDescriptions(): string {
    let description = '';
    const passengers = [
      ['adults', 'adulto'],
      ['children', 'criança'],
      ['babies', 'bebê'],
    ];

    passengers.forEach((passenger, index, arr) => {
      const total = this.formSearch.get(passenger[0])?.value;

      description += total ? `${description ? ', ' : ''}${total} ${passenger[1]}${total > 1 ? 's' : ''}`: ''
    });

    return description ? description : 'Ainda não foram selecionados passageiros';
  }

  getPassengers(): number {
    return this.formSearch.get('adults')?.value
      + this.formSearch.get('children')?.value
      + this.formSearch.get('babies')?.value;
  }

  getFormSearch(): FormGroup {
    return this.formSearch;
  }

  getControl<T>(controlName: string): FormControl {
    const control = this.formSearch.get(controlName);

    if (!control)
      throw new Error(`FormControl called ${controlName} was not found`);

    return control as FormControl<T>;
  }

  getSearchData(): SearchData {
    const departureDateControl = this.getControl<Date>('departureDate');

    const searchData: SearchData = {
      pagina: 1,
      porPagina: 50,
      somenteIda: this.getControl<boolean>('oneWayTicket').value,
      origemId: this.getControl<boolean>('origin').value.id,
      destinoId: this.getControl<boolean>('destiny').value.id,
      tipo: this.getControl<boolean>('type').value,
      passageirosAdultos: this.getControl<boolean>('adults').value,
      passageirosCriancas: this.getControl<boolean>('children').value,
      passageirosBebes: this.getControl<boolean>('babies').value,
      dataIda: departureDateControl.value.toISOString()
    };

    const arrivalDateControl = this.getControl<Date>('arrivalDate');
    if (arrivalDateControl.value)
      searchData.dataVolta = arrivalDateControl.value.toString();

    const connectionsControl = this.getControl<number>('connections');
    if (connectionsControl.value)
      searchData.conexoes = connectionsControl.value;

    return searchData;
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }

  alterType(event: MatChipSelectionChange, type: string) {
    if (event.selected) {
      this.formSearch.patchValue({ type });
      console.log('ticket type ->', type)
    }
  }

  formIsValid(): boolean {
    return this.formSearch.valid;
  }
}
