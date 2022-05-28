import { Injectable } from '@angular/core';

import { PartCategory, PartCategoryFieldType } from "../PartCategory";
import { PART_CATEGORIES } from '../PART_CATEGORIES';

@Injectable({
  providedIn: 'root'
})
export class PartCategoryService {

  constructor() { }

  getPartCategories(){
    return PART_CATEGORIES;
  }
}
