import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from 'src/employee/employee.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AttendanceModule } from 'src/attendance/attendance.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    EmployeeModule,
    AttendanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
