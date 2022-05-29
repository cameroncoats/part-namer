import { Component, OnInit } from '@angular/core';
import { PartCategoryService } from '../part-category.service';
import { PartCategories, PartCategory } from '../../PartCategory';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-name-gen',
  templateUrl: './name-gen.component.html',
  styleUrls: ['./name-gen.component.css'],
})
export class NameGenComponent implements OnInit {
  partCategories: PartCategories;
  name = new FormControl();


  constructor(
    private partCategoryService: PartCategoryService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getPartCategories();
  }

  getPartCategories(): void {
    this.partCategoryService.getPartCategories()
    .subscribe(partCategories => this.partCategories = partCategories);
  }

  displayFn(value?: PartCategory): string {
    return value.name;
  }
}
