import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { InputApi, InputComponent, InputType } from '../input/input.component';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss'],
})
export class FormElementComponent implements OnInit, InputApi {
  uuid: string;

  @ViewChild(InputComponent, { static: false }) input!: InputComponent;

  @Input() inputType: InputType = InputType.text;
  @Input() placeholder: string = 'Form Element Placeholder';
  @Input() value = '';
  @Input() label = 'Input Label';

  constructor() {
    this.uuid = crypto.randomUUID();
  }

  ngOnInit(): void {}

  get text(): string {
    return this.input.text;
  }
}
