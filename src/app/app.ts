import { Component, signal } from '@angular/core';
import "bootstrap";
import { productModel } from './models/models-module';
import{ProductsComponent} from './component/products/products.component';
import{CartComponent} from './component/cart/cart.component';
@Component({
  imports: [CartComponent,ProductsComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  
  products : productModel[] = [
    {
      id:1,
      name: "Apple Mac mini",
      description: "Compact Apple desktop computer with a sleek and modern design.",
      productQun: 5,
      price: 599,
      img: "assets/images_shop/img1.jpg"
    },
    {
      id:2,
      name: "Wireless Controller",
      description: "Wireless gaming controller with comfortable grips and responsive buttons.",
      productQun: 12,
      price: 49,
      img: "assets/images_shop/img2.jpg"
    },
    {
      id:3,
      name: "Red Wireless Headphones",
      description: "Stylish wireless over-ear headphones with a comfortable design.",
      productQun: 8,
      price: 89,
      img: "assets/images_shop/img3.jpg"
    },
    {
      id:4,
      name: "Black Headphones",
      description: "Premium black headphones designed for immersive sound and comfort.",
      productQun: 10,
      price: 120,
      img: "assets/images_shop/img4.jpg"
    },
    {
      id:5,
      name: "Wireless Earbuds",
      description: "Compact wireless audio earbuds with a portable charging case.",
      productQun: 0,
      price: 59,
      img: "assets/images_shop/img5.jpg"
    },
    {
      id:6,
      name: "Wireless Mouse",
      description: "Modern wireless mouse with an ergonomic design for everyday use.",
      productQun: 20,
      price: 25,
      img: "assets/images_shop/img6.jpg"
    },
    {
      id:7,
      name: "Digital Stylus Pen",
      description: "Precision digital pen for writing, drawing, and taking notes.",
      productQun: 1,
      price: 35,
      img: "assets/images_shop/img7.jpg"
    },
    {
      id:8,
      name: "Black Smart Watch",
      description: "Modern smartwatch with a stylish black design and digital display.",
      productQun: 9,
      price: 79,
      img: "assets/images_shop/img8.jpg"
    },
    {
      id:9,
      name: "Orange Smart Watch",
      description: "Smartwatch featuring a rectangular display and orange strap.",
      productQun: 2,
      price: 99,
      img: "assets/images_shop/img9.jpg"
    }
  ];

}
