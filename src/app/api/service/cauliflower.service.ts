import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/Category";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Subcategory} from '../model/Subcategory';
import {Training} from "../model/Training";
import {Offer} from "../model/Offer";

@Injectable({
  providedIn: 'root'
})
export class CauliflowerService {

  private _trainingNames = new BehaviorSubject<string[]>([]);
  readonly trainingNames = this._trainingNames.asObservable();

  constructor(private http: HttpClient) {
  }

  addTrainings = (name: string) => {
    if (!this._trainingNames.getValue().includes(name)) {
      this._trainingNames.next(this._trainingNames.getValue().concat(name));
    } else {
      this._trainingNames.next(this._trainingNames.getValue().filter(e => e !== name));
    }
    console.log(this._trainingNames);
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

  sendOffer = (offer: Offer)  => {
    return this.http.post(`${environment.cauliflowerAPI}offer`, offer).subscribe();
  }

}
