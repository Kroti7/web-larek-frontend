export class ItemSmall {

  constructor(container: HTMLElement) {
    this.tag = ;
    this.name = ;
    this.image = ;
    this.price = ;
  }
}

/* export class PopupWindow {
  constructor(container: HTMLElement, elementInPopup: HTMLElement) {
    this.element = ;
    this.btnClosePopup = ;
  }
} */

export class ItemFull {
  constructor(container: HTMLElement) {
    this.tag = ;
    this.name = ;
    this.description = ;
    this.image = ;
    this.price = ;

    this.addBtn = ;
  }
}

export class ItemInBasket {
  constructor(container: HTMLElement) {
    this.position = ;
    this.name = ;
    this.price = ;

    this.removeBtn = ;
  }
}

export class Basket {
  constructor(container: HTMLElement) {
    this.position = ;
    this.name = ;
    this.price = ;

    this.orderBtn = ;
  }
}