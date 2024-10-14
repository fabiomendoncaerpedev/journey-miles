import { Component, Input } from '@angular/core';
import { Testimony } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-testimony',
  templateUrl: './card-testimony.component.html',
  styleUrls: ['./card-testimony.component.scss']
})
export class CardTestimonyComponent {
  @Input() testimony!: Testimony;
}
