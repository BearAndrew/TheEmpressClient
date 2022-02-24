import { FirebaseService } from './../../_service/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_interface/product.interface';
import { ManagerService } from 'src/app/_service/manager.service';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.scss']
})
export class CommodityComponent implements OnInit {

  products: Product[] = [];

  constructor(private managerService: ManagerService,
    private firebaseService: FirebaseService) {
    this.firebaseService.getProducts().subscribe(
      data => {
        this.products = data;
        console.log(JSON.stringify(this.products));
      }
    );
  }

  ngOnInit(): void {
  }

}
