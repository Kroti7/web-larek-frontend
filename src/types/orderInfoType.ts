enum paymentTypes {
  online,
  onArrival
}

export interface IOrderInfo {
  paymentMethod: paymentTypes;
  address: string;
  email: string;
  telNum?: string;
}