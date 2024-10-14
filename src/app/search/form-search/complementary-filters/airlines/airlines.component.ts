import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Airline } from 'src/app/core/types/types';
import { FormSearchService } from '../../../../core/services/form-search.service';
import { AirlineService } from '../../../services/airline.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss']
})
export class AirlinesComponent implements OnInit {
  airlines: Array<Airline> = [];
  selecteds: Array<Airline> = [];

  airlinesControl: FormControl<number[] | null>;

  constructor(
    private airlineService: AirlineService,
    private formSearchService: FormSearchService
  ) {

    this.airlinesControl = this.formSearchService.getControl<number[] | null>('airlines');

  }

  ngOnInit(): void {
    this.airlineService.list().subscribe(
      res => {
        this.airlines = res;
      }
    );
    this.airlinesControl.valueChanges.subscribe(value => {
      if (!value) {
        this.selecteds = [];
      }
    });
  }

  alternateAirline(airline: Airline, checked: boolean): void {
    if (!checked) {
      this.selecteds = this.selecteds.filter(comp => comp != airline);
    } else {
      this.selecteds.push(airline);
    }
    this.formSearchService.getFormSearch().patchValue({
      airlines: this.selecteds.map(comp => Number(comp.id))
    });
  }

  selectedAirline(airline: Airline): boolean {
    return this.selecteds.includes(airline);
  }
}
