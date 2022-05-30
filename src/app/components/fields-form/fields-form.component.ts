import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';
import { PartCategoryField } from 'src/PartCategory';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fields-form',
  templateUrl: './fields-form.component.html',
  styleUrls: ['./fields-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldsFormComponent implements OnChanges {
  @Input() formFields: PartCategoryField[] = [];
  @Output() formValues = new EventEmitter<Record<string,unknown>>();

  public fieldsFormGroup: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnChanges() {
    if (this.formFields !== undefined) {
      // clear form
      Object.keys(this.fieldsFormGroup.controls).forEach(key => {
        this.fieldsFormGroup.removeControl(key);

      });
      // create new form
      this.createForm(this.formFields);

    }
    this.fieldsFormGroup.valueChanges.subscribe(val => {
        this.formValues.emit(this.fieldsFormGroup.getRawValue());
      });
  }

  createForm(controls: PartCategoryField[]) {
    for (const control of controls) {

      const validatorsToAdd = [];
      if(control.validators !== undefined){
      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(value));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
    }
      this.fieldsFormGroup.addControl(
        control.name,
        this.fb.control({value: (control.value === undefined ? '' : control.value), disabled: (control.type == "fixedText")}, validatorsToAdd)
      );
    }
    this.formValues.emit(this.fieldsFormGroup.getRawValue());
  }

}
