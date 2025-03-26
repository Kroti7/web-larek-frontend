class BasketBtn {
  basketButton: HTMLButtonElement;
  totalItemsInBasket: HTMLElement;
}

export class Header implements BasketBtn{
  basketButton: HTMLButtonElement;
  totalItemsInBasket: HTMLElement;

  header: HTMLElement;
}

export class ItemSmall {
  itemTitle: HTMLElement;
  itemTag: HTMLElement;
  itemImage: HTMLImageElement;
  itemPrice: HTMLElement;
}

class ClosePopupBtn {
  closePopupButton: HTMLButtonElement;
}

class PopupWindow implements ClosePopupBtn {
  closePopupButton: HTMLButtonElement;

  popupWindowContainer: HTMLElement;
}

class AddToBasketBtn {
  addButton: HTMLButtonElement;
}

export class ItemFull implements PopupWindow, AddToBasketBtn {
  popupWindowContainer: HTMLElement;
  closePopupButton: HTMLButtonElement;
  addButton: HTMLButtonElement;

  itemTitle: HTMLElement;
  itemDescrpitiong: HTMLElement;
  itemTag: HTMLElement;
  itemImage: HTMLImageElement;
  itemPrice: HTMLElement;
}


class RemoveItemBtn {
  removeItemButton: HTMLButtonElement;
}

class ItemInBasket implements RemoveItemBtn {
  removeItemButton: HTMLButtonElement;

  itemPositionNumber: HTMLElement;
  itemTitle: HTMLElement;
  itemPrice: HTMLButtonElement;
}

class OrderBtn {
  orderButton: HTMLButtonElement;
}

export class Basket implements PopupWindow, ItemInBasket, OrderBtn {
  popupWindowContainer: HTMLElement;
  closePopupButton: HTMLButtonElement;
  removeItemButton: HTMLButtonElement;
  itemPositionNumber: HTMLElement;
  itemTitle: HTMLElement;
  itemPrice: HTMLButtonElement;
  orderButton: HTMLButtonElement;


  basketTitle: HTMLElement;
  basketTotal: HTMLElement;
}

class NextBtn {
  nextButton: HTMLButtonElement;
}

class BuyBtn {
  buyButton: HTMLButtonElement;
}

export class OrderPopup implements PopupWindow, NextBtn, BuyBtn {
  popupWindowContainer: HTMLElement;
  closePopupButton: HTMLButtonElement;
  nextButton: HTMLButtonElement;
  buyButton: HTMLButtonElement;

  formsData: [];
  isFinal: boolean;
}

class ExitOrderSuccessBtn implements ClosePopupBtn {
  closePopupButton: HTMLButtonElement;
}

export class OrderSuccess implements PopupWindow, ExitOrderSuccessBtn {
  popupWindowContainer: HTMLElement;
  closePopupButton: HTMLButtonElement;

  orderSuccessImage: HTMLImageElement;
  orderSuccessTitle: HTMLElement;
  orderSuccessTotal: HTMLElement;
}