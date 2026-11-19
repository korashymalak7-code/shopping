export type productModel={
  id:number,
  name:string,
  description: string,
  productQun:number,
  price: number,
  img:string
};

export type productCartModel=productModel &{
  qun: number,
};
