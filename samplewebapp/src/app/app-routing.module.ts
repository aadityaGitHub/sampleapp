import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from 'src/employee/employee.component';
import { AddComponent } from 'src/employee/add/add.component';
import { ListComponent } from 'src/employee/list/list.component';


const routes: Routes = [
  {
    path: 'employee', component: EmployeeComponent

  },
  { path: '', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
