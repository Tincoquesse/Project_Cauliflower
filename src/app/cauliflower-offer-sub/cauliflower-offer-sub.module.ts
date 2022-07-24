import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CauliflowerOfferSubPageComponent } from './pages/cauliflower-offer-sub-page/cauliflower-offer-sub-page.component';
import { SubcategoryCheckboxComponent } from './components/subcategory-checkbox/subcategory-checkbox.component';
import { SubcategoryContainerComponent } from './components/subcategory-container/subcategory-container.component';
import { SubcategoriesListComponent } from './components/subcategories-list/subcategories-list.component';



@NgModule({
  declarations: [
    CauliflowerOfferSubPageComponent,
    SubcategoryCheckboxComponent,
    SubcategoryContainerComponent,
    SubcategoriesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CauliflowerOfferSubModule { }
