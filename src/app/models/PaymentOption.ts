export interface PaymentOption {
  merchantCode:string,
  payItemId:string,
  amount:string,
  currency:string,
  customerEmail:string,
  transactionReference:string,
  paymentMode:'LIVE'|'TEST',
}
