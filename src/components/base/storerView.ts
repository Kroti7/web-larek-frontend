class BasketBtn {

}

export class Header implements BasketBtn{

}

export class ItemSmall {

}

class ClosePopupBtn {

}

class PopupWindow implements ClosePopupBtn {

}

class AddToBasketBtn {
  
}

export class ItemFull implements PopupWindow, AddToBasketBtn {

}


class ItemInBasket {

}

class OrderBtn {

}

export class Basket implements PopupWindow, ItemInBasket, OrderBtn {

}

class NextBtn {

}

class BuyBtn {

}

export class OrderPopup implements PopupWindow, NextBtn, BuyBtn {

}

class ExitOrderSuccess implements ClosePopupBtn {

}

export class OrderSuccess implements PopupWindow, ExitOrderSuccess{

}