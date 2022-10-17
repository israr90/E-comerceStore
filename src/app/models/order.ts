import { timeStamp } from "console";
import { product } from "./product";
import { shipping_address } from "./shipping_address";

export class order {
    userId?:string;
    orderId?:string;
    date?:string;
    order?:number;
    payment_method? :string;
    payment_reference?:string;
    products?:[OrderProducts];
    shipping_address:shipping_address=new shipping_address()
    shipping_method?:shipping_method
    status?:string;
    total?:number;
}
export class shipping_method {
price?:string;
title?:string;

}
export class OrderProducts
{
    id:string;
    quantity:string;
    price:number;
    title:string;
    constructor()
    {
        this.id="";
        this.quantity="";
        this.price=0;
        this.title="";
    }
}


