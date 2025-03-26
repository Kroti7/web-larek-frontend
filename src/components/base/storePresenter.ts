import { IItem } from "../../types/goodsType";
import { IOrderInfo } from "../../types/orderInfoType";
import { basketModal, orderModal } from "./storeModal";

class ItemSmallHandler {
  openFullItemPopup(ItemData: IItem): void {}
}


class BasketChangeHandler implements basketModal {
  updateBasketIcon(): void {
    basketModal.getTotalItems();
  }

  updateRender(): void {}

  addToBasket(id: number): void {
    basketModal.addItem(id);
    this.updateBasketIcon();
  }

  removeFromBasket(id: number): void {
    basketModal.removeItem(id);
    this.updateBasketIcon();
    this.updateRender();
  }
}

class Orderhandler implements orderModal {
  changeValidity(isValid: boolean, formInputFieldElement: HTMLElement): void {}
  changeBtnDisableAtr(isFormValid: boolean, btnElement: HTMLButtonElement): void {}

  validateInput(inputData: any, validatingMethod: any, targetInputFieldElement: HTMLElement, formElement: HTMLFormElement, formBtnElement: HTMLButtonElement): void {
    this.changeValidity(validatingMethod(inputData), targetInputFieldElement);
    this.changeBtnDisableAtr(formElement.validity.valid, formBtnElement);
  }

  continueOrder(orderData: IOrderInfo) {}
  renderNextPage() {}
}