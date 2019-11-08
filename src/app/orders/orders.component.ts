import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';


interface IOrder {
  pid: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders: Array<IOrder> = [];
  nameInput = '';
  confirmMessage = '';
  errorMessage = '';

  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {
  }

  async ngOnInit() {

  }
  calculate() {
    console.log('nameInput', this.nameInput);



  }

  // add items
  addItem(item: string) {
    switch (item) {
      case 'Android':
        this.orders.unshift({
          'pid': '1',
          'image': 'assets/sm_android.jpeg',
          'description': 'Android',
          'price': 150.00,
          'quantity': null
        });
        break;
      case 'IPhone':
        this.orders.unshift({
          'pid': '2',
          'image': 'assets/sm_iphone.jpeg',
          'description': 'IPhone',
          'price': 200.00,
          'quantity': null
        });
        break;
      case 'Windows Phone':
        this.orders.unshift({
          'pid': '3',
          'image': 'assets/sm_windows.jpeg',
          'description': 'Windows Phone',
          'price': 110.00,
          'quantity': null
        });
        break;

    }

  }
  // delete line
  delete(index: number) {
    console.log('index', index);
    this.orders.splice(index, 1);
  }
}

// read in orders
async readFile() {
  const rows = await this.http.get('assets/orders.json').toPromise();
  console.log('rows', rows.json());
  this.orders = rows.json();
  return rows.json();
}
