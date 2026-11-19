import { Component,input,inject } from '@angular/core';
import { productModel } from '../../models/models-module';
import{CurrencyPipe} from '@angular/common';
import{CartService} from './../../services/cart-service.service';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product',
  styleUrl: './product.component.scss',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  productInfo=input.required<productModel>();
  
  cartService=inject(CartService);

  addProduct(product:productModel){
    this.cartService.addProductIntoCart(product);
  }
  
}
