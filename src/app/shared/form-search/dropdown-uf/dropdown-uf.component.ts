import { UfService } from './../../../core/services/uf.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input('label') label = '';
  @Input('icon-prefix') iconPrefix = '';

  filteredOptions = [];

  constructor(
    private ufService: UfService
  ) { }

  ngOnInit(): void {
    this.ufService.list()
  }
}
