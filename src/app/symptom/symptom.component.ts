import { Filiale } from './../filiale/filiale';
import { FilialiService } from './../services/filiali.service';
import { FILIALE } from './../filiale/mock-filale';
import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-symptom',
  templateUrl: './symptom.component.html',
  styleUrls: ['./symptom.component.css'],
  // viewProviders: [{
  //   provide: ControlContainer,
  //   useFactory: (container: ControlContainer) => container,
  //   deps: [[new SkipSelf(), ControlContainer]],
  // }]
})
export class SymptomComponent implements OnInit {

  // @Input() modelGroupName: string;
  @Input() regForm: FormGroup;
  filiali: Filiale[];
  selectedItems: Array<string> = [];
  selectedUnit: 'celsius';

  constructor( private fservice: FilialiService) {}

  ngOnInit() {
    this.getFiliali();
  }

  getFiliali(): void {
    this.fservice.getFiliale()
    .subscribe(filiali => this.filiali = filiali);
  }
  // handleSelection(selectedItems: Array<string>): void {
  //   this.selectedItems = selectedItems;
  // }
}
