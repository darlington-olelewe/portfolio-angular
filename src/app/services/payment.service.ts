import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {PaymentOption} from "../models/PaymentOption";

@Injectable({
  providedIn: "root"
})
export class PaymentService{
  merchantId:string = environment.interSwitchCredentials.merchantId;
  payId:string = environment.interSwitchCredentials.paymentId
  getDefaultPaymentOption() {
    const paymentOption:PaymentOption = {
      customerEmail:"",
      currency: "NGN",
      amount:"0",
      merchantCode:this.merchantId,
      payItemId:this.payId,
      paymentMode:"TEST",
      transactionReference: this.getCurrentDate()
    }

    return paymentOption;
  }

  getCurrentDate():string{
    const date = new Date().getMilliseconds()
    return date.toString()
  }
}
