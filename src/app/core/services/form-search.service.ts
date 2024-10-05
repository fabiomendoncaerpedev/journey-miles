import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { UfService } from './uf.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

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

  getControl(controlName: string): FormControl {
    const control = this.formSearch.get(controlName);

    if (!control)
      throw new Error(`FormControl called ${controlName} was not found`);

    return control as FormControl;
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
