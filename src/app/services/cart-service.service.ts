import { Service, signal ,computed,input,effect} from '@angular/core';
import { productCartModel } from '../models/models-module';
import { productModel } from '../models/models-module';

@Service()
export class CartService {

  productsIntoCart=signal<productCartModel[]>([]);

  isValid=signal(false);//popup show or hidden

  currentPopupProduct=signal<productCartModel>(this.productsIntoCart()[0]);
  
  totalPrice=computed(()=>{
    return this.productsIntoCart().reduce((totle,item)=>{
      return totle + (item.price * item.qun);
    },0);
  });

  totalProducts=computed(()=>{
    return this.productsIntoCart().reduce((totle,item)=>{
      return totle + (item.qun);
    },0);
  });

  //************************
  constructor(){
    let oldData=localStorage.getItem("products");
    if(oldData ==null){
      localStorage.setItem("products",JSON.stringify(this.productsIntoCart()));
    }else{
      this.productsIntoCart.set(JSON.parse(oldData));
    }

    effect(()=>{
      localStorage.setItem("products",JSON.stringify(this.productsIntoCart()));
    })
  }

  //************************
  removeProduct(productId : number){
    return this.productsIntoCart.update((val)=>{
      return val.filter((item)=> item.id != productId);
    });
  };

  //************************
  quantityInOneProduct(product:productModel){
    let existProduct=this.productsIntoCart().filter((item)=>item.id==product.id)[0];
    if(existProduct !=undefined){
       return existProduct.qun;
    }else{
      return 0;
    }
  };

  //************************
  togglePopup(){
    this.isValid.update((val)=>!val);
  };

  //************************
  productPopup(product:productModel){
    let newProduct:productCartModel=this.productsIntoCart().filter(function(item){
      return item.id==product.id
    })[0];

    if(newProduct!=undefined){
      this.currentPopupProduct.update((val)=>{
        return{...newProduct}
      })
    }else{
      this.currentPopupProduct.update((val)=>{
        return{...product,qun:0}
      })
    }
  };

 //************************
  addProductIntoPopup(product:productModel){
    this.currentPopupProduct.update((val)=>{
      val.qun++;
      return {...val};
    })
  };

  //************************
  removeProductfromPopup(product:any){
    this.currentPopupProduct.update((val)=>{
      if(this.currentPopupProduct().qun>0){
        val.qun--;
      }
      return {...val};
    })
  };

  //************************
  addProductIntoCart(product:productModel){
    this.productsIntoCart.update((val)=>{
      let isProductExit=this.productsIntoCart().some((item)=>item.id== product.id)
      
      if(isProductExit){
        return val.map((item)=>{
          if(item.id == product.id){
            item.qun++;
            return {...item};
          }
          return item;
        });
      }else{
        return[
          ...val,
          {...product,qun:1}
        ];
      }
    });
  };
  
  //************************
  removeProductFromCart(product:any){
    this.productsIntoCart.update((val)=>{
      return val.map((item)=>{
        if(item.id == product.id){
          item.qun--;
          return item
        }
        return item;
      }).filter((item)=>item.qun>0)
    })
  };

  //************************
  clearAllProduct(){
    this.productsIntoCart.set([])
  };

}