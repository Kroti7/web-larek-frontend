import { IItem } from "../../types/goodsType";
import { IOrderInfo } from "../../types/orderInfoType";


export class basketModal {
  static basket: IItem[] = [];

  static addItem(id:number): void {}
  static removeItem(id:number): void {}
  static getTotalPrice(): number {}
  static getTotalItems() {
    return this.basket.length;
  }
}

export class orderModal {
  static orderInfo: IOrderInfo = {
    paymentMethod = null,
    address = null,
    email = null,
    telNum = null
  };

  static checkValidAdress(adress: string): boolean {}
  static checkValidEmail(email: string): boolean {}
  static checkValidTelNum(telNum: string): boolean {}
}