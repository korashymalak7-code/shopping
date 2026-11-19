import { Component,inject,signal } from '@angular/core';
import{CartService} from './../../services/cart-service.service';
import{CurrencyPipe} from '@angular/common';
@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart',
  styleUrl: './cart.component.scss',
  templateUrl: './cart.component.html',
  standalone :true
})
export class CartComponent {

  cartService=inject(CartService);

  popup=signal(false)

  toggelPopup(){
    this.popup.update((val)=>!val);
  }
  
}
