import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FormSearchService } from '../../core/services/form-search.service';
import { UfService } from '../../core/services/uf.service';
import { UF } from 'src/app/core/types/uf';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input('label') label = '';
  @Input('icon-prefix') iconPrefix = '';
  @Input('placeholder') placeholder = '';
  @Input('control') control!: FormControl;

  filteredOptions$!: Observable<Array<UF>>;
  ufList: Array<UF> = [];

  constructor(
    private ufService: UfService,
    public formSearchService: FormSearchService
  ) { }

  ngOnInit(): void {
    this.ufService.list().subscribe((ufList) => this.ufList = ufList);
    this.filteredOptions$ = this.control.valueChanges.pipe(
      map((value) => this.ufList.filter(uf => uf.nome.toLowerCase().includes(value.toLowerCase())))
    );
  }
}
