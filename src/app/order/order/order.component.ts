import { Component, OnInit } from '@angular/core';
import { Order, Status } from './order';
import { orderList } from './order-list';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.orders = orderList;
  }

  orders: Order[];
  

}

