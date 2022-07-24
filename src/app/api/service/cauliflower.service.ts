import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/Category";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CauliflowerService {

  constructor(private http: HttpClient) {
  }

  getAllCategories = (): Observable<Category[]> => {
    return this.http.get<Category[]>(`${environment.cauliflowerAPI}category/all`);
  }
}
