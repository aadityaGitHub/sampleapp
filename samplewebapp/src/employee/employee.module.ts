import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EmployeeComponent, AddComponent, ListComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: 'employees', component: EmployeeComponent,
        children: [

          { path: '', component: ListComponent }
          ,
          { path: 'add/:id?', component: AddComponent }]
      }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class EmployeeModule { }
