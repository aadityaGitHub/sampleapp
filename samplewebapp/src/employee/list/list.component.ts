import { Component, OnInit } from '@angular/core';
import { Employeemodel } from '../employeemodel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employeeModellst: Employeemodel[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 5; index++) {
      this.employeeModellst.push(Object.create({ id: index, name: 'Name ' + index } as Employeemodel));
    }
  }

  search = () => {

  }

}
