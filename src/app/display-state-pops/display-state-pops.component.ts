import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import statePops from '../../assets/statePops.json';

interface STATE {
  NAME: string;
  POPESTIMATE2020: number;
  POPESTIMATE2021: number;
  POPESTIMATE2022: number;
};

@Component({
  selector: 'app-display-state-pops',
  templateUrl: './display-state-pops.component.html',
  styleUrls: ['./display-state-pops.component.scss'],
  imports: [MatTableModule],
  standalone: true,
})
export class DisplayStatePopsComponent {
  title = "State Populations";
  displayedColumns: string[] = ['NAME', 'POPESTIMATE2020', 'POPESTIMATE2021', 'POPESTIMATE2022'];
  states: STATE[] = statePops;

  constructor() {
    console.log(this.states);
  }

}
