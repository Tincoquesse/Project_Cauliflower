import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/Category";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Subcategory} from '../model/Subcategory';
import {Training} from "../model/Training";

@Injectable({
  providedIn: 'root'
})
export class CauliflowerService {

  constructor(private http: HttpClient) {
  }

  getAllCategories = (): Observable<Category[]> => {
    return this.http.get<Category[]>(`${environment.cauliflowerAPI}category/all`);
  }
  getSubcategoriesFromCategory = (category: String): Observable<Subcategory[]> => {
    return this.http.get<Subcategory[]>(`${environment.cauliflowerAPI}subcategory/get/${category}`);
  }

  getTrainingsFromSubcategory = (subcategory: String): Observable<Training[]> => {
    return this.http.get<Training[]>(`${environment.cauliflowerAPI}training/get/${subcategory}`);
  }
}
