import { FormSearchService } from './../../../../core/services/form-search.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StopOptions } from 'src/app/core/types/types';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss']
})
export class StopsComponent implements OnInit {
  selectedOptions: StopOptions | null = null;
  options: Array<StopOptions> = [
    {
      display: "Direto",
      value: "0"
    },
    {
      display: "1 conexão",
      value: "1"
    },
    {
      display: "2 conexões",
      value: "2"
    },
    {
      display: "Mais de 2 conexões",
      value: "3"
    },
  ];
  connectionsControl!: FormControl<number | null>;

  constructor(
    private formSearchService: FormSearchService
  ) {
    this.connectionsControl = this.formSearchService.getControl<number>('connections');
  }

  ngOnInit(): void {
    this.connectionsControl.valueChanges.subscribe(
      (value) => {
        if(!value)
          this.selectedOptions = null;
      }
    )
  }
}
