import { Component ,input ,inject} from '@angular/core';
import { productModel } from './../../models/models-module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{ProductComponent} from './../product/product.component'
import{CartService} from './../../services/cart-service.service';
@Component({
  imports: [CommonModule,FormsModule,ProductComponent],
  selector: 'app-products',
  styleUrl: './products.component.scss',
  templateUrl: './products.component.html',
  standalone:true
})
export class ProductsComponent {

  // this data send by appComponent
  products=input.required<productModel[]>();

  cartService=inject(CartService);
  
}
