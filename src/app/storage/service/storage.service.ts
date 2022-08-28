import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Training} from "../../api/model/Training";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _trainingOrderList = new BehaviorSubject<Training[]>([]);
  readonly trainingOrderList = this._trainingOrderList.asObservable();

  constructor() {
  }

  isContainTraining = (training: Training | undefined): boolean => {
    if (training !== undefined){
      return this._trainingOrderList.getValue().includes(training);
    }else{
      return false
    }
  }

manageTrainings = (training: Training) => {
  if (!this._trainingOrderList.getValue().includes(training)) {
    this._trainingOrderList.next([...this._trainingOrderList.getValue(), training]);
  } else {
    this._trainingOrderList.next(this._trainingOrderList.getValue().filter(e => e.name !== training.name));
  }
}
}
