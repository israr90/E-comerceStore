import { timeStamp } from "console";

export class product {
    id:string;
    category:string;
    date:string;
    description:string;
    image:string;
    origin:string;
    price_per_piece:number;
    storage:string;
    stock:number;
    title:string;

    constructor(){
      this.id="";
      this.category="";
      this.date="";
      this.stock=0;
      this.description="";
      this.image="";
      this.origin="";
      this.price_per_piece=0;
      this.storage="";
      this.title="";
    }
    
    
  }