import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/Category";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Subcategory} from '../model/Subcategory';
import {Training} from "../model/Training";
import {Offer} from "../model/Offer";

@Injectable({
  providedIn: 'root'
})
export class CauliflowerService {

  constructor(private http: HttpClient) {
  }

  getAllCategories = (): Observable<Category[]> => {
    return this.http.get<Category[]>(`${environment.cauliflowerAPI}categories`);
  }

  getSubcategoriesFromCategory = (category: String): Observable<Subcategory[]> => {
    return this.http.get<Subcategory[]>(`${environment.cauliflowerAPI}category/${category}/subcategories`);
  }

  getTrainingsFromSubcategory = (subcategory: String): Observable<Training[]> => {
    return this.http.get<Training[]>(`${environment.cauliflowerAPI}subcategory/${subcategory}/trainings`);
  }

  sendOffer = (offer: Offer) =>
    this.http.post(`${environment.cauliflowerAPI}offer`, offer)

}
