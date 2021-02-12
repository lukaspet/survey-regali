import { Component, Input, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

  @Input() regForm: FormGroup;
  selectedItems: Array<string> = [];
  selectedUnit: 'celsius';

  readOnlyTextArea = true;
  filterName = '';

  handleSelection(selectedItems: Array<string>): void {
    this.selectedItems = selectedItems;
  }
}
