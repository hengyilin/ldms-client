import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {PageEvent} from "@angular/material";

const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 39.99,
    description: '5lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    description: '1lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 39.99,
    description: '5lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    description: '1lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 39.99,
    description: '5lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    description: '1lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 39.99,
    description: '5lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    description: '1lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 39.99,
    description: '5lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    description: '1lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 39.99,
    description: '5lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    description: '1lbs of tuna',
    isChecked: false
  }
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  datasource: MatTableDataSource<object>;
  // datasource: MatTableDataSource<object> = new MatTableDataSource(ELEMENT_DATA);

  length = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [1, 2, 5, 10];

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngOnInit() {
    this.loadData(this.pageIndex, this.pageSize);
    this.datasource.sort = this.sort;
  }

  selectAll() {
    for (let elm of ELEMENT_DATA) {
      elm.isChecked = !elm.isChecked;
    }
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadData(this.pageIndex, this.pageSize);
  }

  loadData(pageIndex: number, pageSize: number) {
    this.datasource = new MatTableDataSource<object>(ELEMENT_DATA.slice(pageIndex, pageIndex + pageSize));
  }
}
