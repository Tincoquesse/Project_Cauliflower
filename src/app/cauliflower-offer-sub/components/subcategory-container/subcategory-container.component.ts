import {Component, Input, OnInit} from '@angular/core';
import {Subcategory} from "../../../api/model/Subcategory";
import {CauliflowerService} from "../../../api/service/cauliflower.service";
import {Training} from "../../../api/model/Training";
import {map} from "rxjs";
import {StorageService} from "../../../storage/service/storage.service";

@Component({
  selector: 'app-subcategory-container',
  templateUrl: './subcategory-container.component.html',
  styleUrls: ['./subcategory-container.component.css']
})
export class SubcategoryContainerComponent implements OnInit {

  @Input() subcategory: Subcategory | undefined;

  trainings: Training[] = [];

  constructor(private service: CauliflowerService, private storage: StorageService) {
  }

  ngOnInit(): void {
    if (this.subcategory?.name) {
      this.service.getTrainingsFromSubcategory(this.subcategory.name).pipe(
        map(data => data as Training[])
      ).subscribe(results => this.trainings = results);
      this.storage.clearTrainingOrderList();
    }
  }

  addTraining = (training: Training) => {
    this.storage.manageTrainings(training);

  }
}
