import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './attendance.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AttendanceComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'attendance', component: AttendanceComponent,
        children: [{
          path: '', component: ListComponent
        },
        { path: 'add', component: ListComponent }
        ]
      },
    ])
  ]
})
export class AttendanceModule { }
