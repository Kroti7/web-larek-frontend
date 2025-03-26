enum paymentTypes {
  online,
  onArrival
}

export interface IOrderInfo {
  paymentMethod: paymentTypes | null;
  address: string | null;
  email: string | null;
  telNum?: string | null;
}