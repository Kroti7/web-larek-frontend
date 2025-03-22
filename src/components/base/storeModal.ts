import { IItem } from "../../types/goodsType";
import { IOrderInfo } from "../../types/orderInfoType";


export class basketModal {
  static basket: IItem[] = [];

  addItem(id:number) {}
  removeItem(id:number) {}
  getTotalPrice(): number {}
  getTotalItems(): number {}
}

export class orderModal {
  orderInfo: IOrderInfo;

  checkValidAdress(adress: string) {}
  checkValidEmail(email: string) {}
  checkValidTelNum(telNum: string) {}

  toggleBtn(btnElement: HTMLButtonElement) {}
}