// import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
// import {PaymentService} from "../../services/payment.service";
// import {PaymentOption} from "../../models/PaymentOption";
//
// @Component({
//   selector: "app-payment",
//   templateUrl: 'payment.component.html'
// })
// export class PaymentComponent implements OnInit{
//   @ViewChild("amount") amount = ElementRef<HTMLInputElement>
//   @ViewChild("email") email = ElementRef<HTMLInputElement>
//
//   tooglePaymentPage:boolean = false
//   paymentOption!:PaymentOption;
//   constructor(private paymentService:PaymentService) {
//     this.paymentOption = this.paymentService.getDefaultPaymentOption()
//   }
//   ngOnInit():void{
//
//   }
//
//   proceed(amount:string,email:string){
//     this.paymentOption.customerEmail = email;
//     this.paymentOption.amount = amount;
//
//     console.log(this.paymentOption)
//     this.tooglePaymentPage = !this.tooglePaymentPage;
//   }
//
//   handleCallBack(data:any){
//     console.log(data)
//     this.tooglePaymentPage = !this.tooglePaymentPage;
//   }
// }
