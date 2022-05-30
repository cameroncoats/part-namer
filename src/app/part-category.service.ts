import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';
import { PartCategories } from "../PartCategory";

@Injectable({
  providedIn: 'root'
})
export class PartCategoryService {

  constructor(private http: HttpClient,@Inject(APP_BASE_HREF) public baseHref: string) { }

    getPartCategories(): Observable<PartCategories> {
      return this.http.get<PartCategories>('./assets/part-categories.json')
    }
  }
