import { Component, OnInit } from '@angular/core';
import { PartCategoryService } from '../part-category.service';
import { PartCategories, PartCategory } from '../../PartCategory';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {
  FormBuilder,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-name-gen',
  templateUrl: './name-gen.component.html',
  styleUrls: ['./name-gen.component.css'],
})
export class NameGenComponent implements OnInit {
  partCategories: PartCategories;
  formValues: Record<string,unknown>;
  name = new FormControl();
  filteredCategories: Observable<PartCategory[]>;

  constructor(
    private partCategoryService: PartCategoryService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getPartCategories();
  }

  private _filter(value: string): PartCategory[] {
    const filterValue = value.toLowerCase();
    return this.partCategories.categories.filter(category => category.name.toLowerCase().includes(filterValue));
  }

  getPartCategories(): void {
    this.partCategoryService.getPartCategories()
    .subscribe(partCategories => {
      this.partCategories = partCategories;
      this.filteredCategories = this.name.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
    });
  }

  isObject(obj): boolean {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };

  displayFn(value): string {
    if(typeof value == 'undefined') return;
    if(value == null) return;
    if(typeof value !== 'object') return;
    if(!value.hasOwnProperty('name')) return;

    return value.name;
  }

  valuesChanged(values: Record<string,unknown>){
    this.formValues = values;
  }

  getPartName(fields):string{
    if(this.name.value.template !== undefined){
      // get part name from template
      return this.getPartNameTemplate(fields,this.name.value.template);
    } else {
      // just return values comma separated
      return this.getPartNameCommas(fields);
    }
  }

  getPartNameCommas(fields):string {
    let partName = "";
    // combine all field values into comma separated string
    for (const val of Object.values(fields)) {
      partName += val + ', '
     }
     // remove trailing comma
     return partName.slice(0,-2);
  }

  getPartNameTemplate(fields,template):string {
    const templateMatcher = /{{\s?([^{}]*)\s?}}/g;
    const text = template.replace(templateMatcher, (substring, value, index) => {
      value = fields[value];
      return value;
    });
    return text
  }

}
