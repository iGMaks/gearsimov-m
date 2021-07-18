import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  value: number;
  cost: number;
  total_cost: Number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Красный носок',value:1, cost: 5, total_cost: 5 },
  {name: 'Синий носок',value: 2, cost: 3.14, total_cost:6.28 },
  {name: 'Бесцветный носок',value: 5, cost: 1.23, total_cost:6.15},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gerasimov';
  sum:any

  displayedColumns: string[] = ['name', 'value', 'cost','total_cost'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort)sort: MatSort;



  getMultiplication(i) {
    console.log(this.sum);

   return i.total_cost = (i.value * i.cost)
   
   }

   getTotalCost() {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
     return this.dataSource.data.map(t => t.total_cost).reduce((reducer));
   }

   ngOnInit() {
    return this.sum = this.getTotalCost()
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}



