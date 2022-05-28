import { Component, OnInit } from '@angular/core';
import { PartCategoryService } from '../part-category.service';
import { PartCategory } from '../../PartCategory';

@Component({
  selector: 'app-name-gen',
  templateUrl: './name-gen.component.html',
  styleUrls: ['./name-gen.component.css']
})
export class NameGenComponent implements OnInit {

  PartCategories: PartCategory[] = [];

  constructor(private partCategoryService: PartCategoryService) { }

  ngOnInit(): void {
  }

}
