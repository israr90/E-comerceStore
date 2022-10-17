
import { Injectable } from '@angular/core';
 import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { OrderProducts } from '../models/order';
import { OrderExport } from '../models/orderExport';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {
  CurrentOrder=new  OrderExport;
  OrderExport=new  Array<OrderExport>();
  odproduct=new Array<OrderProducts>();
  constructor() {
    this.OrderExport=[];
    //this.odproduct=[];
   }

  public exportAsExcelFile(json: any[], excelFileName: string): void {

debugger;


  json.forEach(element => {
    this.CurrentOrder=new OrderExport();
   
    this.CurrentOrder.SrNo= this.CurrentOrder.SrNo++;
    if(element.date!=undefined)
    {
      this.CurrentOrder.date=element.date;
    }
 
    if(element.shipping_address!=undefined && element.shipping_address.city!=undefined)
    {
      this.CurrentOrder.adress=  element.shipping_address.address+" "+ element.shipping_address.city +" " +element.shipping_address.state +" " +element.shipping_address.zip_code +" " +element.shipping_address.country;
     this.CurrentOrder.name=element.shipping_address.name;
    }
    if(element.total!=undefined)
    {
      this.CurrentOrder.total=element.total;
    }
    if(element.price!=undefined)
    {
      this.CurrentOrder.orderPrice=element.price;
    }
    if(element.payment_method!=undefined)
    {
      this.CurrentOrder.paymentMethod=element.payment_method;
    }
    if(element.products!=undefined &&element.products!=null)
    {
      this.odproduct=element.products;
       
    this.odproduct.forEach(prod =>
       {
      this.CurrentOrder.item=this.CurrentOrder.item+" "+prod.title+""+ "*"+prod.quantity;
      
    });
    }

    


    this.OrderExport.push(this.CurrentOrder);
});

    const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.OrderExport);
    const myworkbook: XLSX.WorkBook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };


    const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_exported'+ EXCEL_EXTENSION);
  }

}