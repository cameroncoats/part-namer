import { Component, OnInit } from '@angular/core';
import { PartCategoryService } from '../part-category.service';
import { PartCategory } from '../../PartCategory';
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
  partCategories: PartCategory[] = [];
  name = new FormControl();

  constructor(
    private partCategoryService: PartCategoryService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getPartCategories();
  }

  getPartCategories(): void {
    this.partCategories = this.partCategoryService.getPartCategories();
  }
}
