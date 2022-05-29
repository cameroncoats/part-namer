import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartCategories } from "../PartCategory";

@Injectable({
  providedIn: 'root'
})
export class PartCategoryService {

  constructor(private http: HttpClient) { }

    getPartCategories(): Observable<PartCategories> {
      return this.http.get<PartCategories>('/assets/part-categories.json')
    }
  }
