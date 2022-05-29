import { Component, OnInit, Input, ChangeDetectionStrategy  } from '@angular/core';
import { PartCategoryField } from 'src/PartCategory';

@Component({
  selector: 'app-fields-form',
  templateUrl: './fields-form.component.html',
  styleUrls: ['./fields-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldsFormComponent implements OnInit {
  @Input() formFields: PartCategoryField[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
