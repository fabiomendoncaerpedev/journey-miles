import { UfService } from './../../core/services/uf.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormSearchService } from './../../core/services/form-search.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {
  constructor(
    public dialog: MatDialog,
    public formSearchService: FormSearchService,
    public ufService: UfService
  ) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }
}
