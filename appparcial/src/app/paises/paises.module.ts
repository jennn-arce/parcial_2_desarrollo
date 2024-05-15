import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesComponent } from './paises.component';
import { RouterModule } from '@angular/router';
import { PaisesListComponent } from './paises-list/paises-list.component';
import { PaisesDetailComponent } from './paises-detail/paises-detail.component';



@NgModule({
  declarations: [
    PaisesComponent,
    PaisesListComponent,
    PaisesDetailComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],

  exports: [PaisesListComponent, PaisesDetailComponent]
})
export class PaisesModule { }
