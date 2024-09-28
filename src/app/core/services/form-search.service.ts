import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { UfService } from './uf.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class FormSearchService {

  private formSearch: FormGroup;

  constructor(
    private dialog: MatDialog,
    public ufService: UfService
  ) {
    this.formSearch = new FormGroup({
      oneWayTicket: new FormControl(false),
      origin: new FormControl(),
      destiny: new FormControl(),
      type: new FormControl('Econômica'),
      adults: new FormControl(0),
      children: new FormControl(0),
      babies: new FormControl(0)
    })
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
}
