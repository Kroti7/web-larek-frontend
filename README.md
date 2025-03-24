# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

<details><summary>🛠️ Установка и запуск</summary>
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
</details>
<details><summary>🏗️ Сборка</summary>

```
npm run build
```

или

```
yarn build
```
</details>

# 📘 Документация
Приложение использует архитектуру **MVP**, основная логика разделена на логику для корзины и логику для заказа. Сделано это для изолирования, будущего расширения приложение и переиспользования модулей.

```mermaid
sequenceDiagram
    participant View
    participant Presenter
    participant Model

    View->>Presenter: Пользователь изменяет состав корзины
    Presenter->>Model: Обновляет данные корзины и запрашивает новые данные (общ. сумму и кол-во позиций)
    Model->>Presenter: Возвращает обновленные данные
    Presenter->>View: Перерисовывает затронутые элементы

    View->>Presenter: Пользователь добавляет данные о зказе 
    Presenter->>Model: Валидация данных и их сохранение
    Model->>Presenter: Возвращает результат валдицаии
    Presenter->>View: Перерисовывает форму заказа

```


## Утилиты
### Класс API
Класс API используется для работы с сервером, сетивые запросы GET создаются методом get(url), другие типы запросов реализуется через post(url, data, method = POST)


## Классы слоя модели

```mermaid
classDiagram
  basketModal <|-- IItem : implements
  orderModal <|-- IOrderInfo : implements

  class basketModal {
    +basket
    +addItem(id)
    +removeItem(id)
    +getTotalPrice()
    +getTotalItems()
  }

  class IItem {
    <<interface>>
    id: number
    name: string
    description: string
    tag: string
    image: string
    price: number
    quantity: number
  }

  class orderModal {
    orderInfo
    checkValidAdress(adress)
    checkValidEmail(email)
    checkValidTelNum(telNum)
    toggleBtn(btnElement)
  }

  class IOrderInfo {
    <<interface>>
    paymentMethod: paymentTypes;
    address: string;
    email: string;
    telNum?: string;
  }

```

### Класс корзины
Используется для манипуляции данных корзины, где: addItem(id) добавляет товар, removeItem(id) удаляет его, getTotalPrice() возвращает общую стоимость заказа, а getTotalItems() показывает кол-во товаров в корзине
<details><summary>Код и ссылка</summary>

```Typescript
export class basketModal {
  static basket: IItem[] = [];

  addItem(id:number) {}
  removeItem(id:number) {}
  getTotalPrice(): number {}
  getTotalItems(): number {}
}
```
</details>

### Класс заказа

<details><summary>Код и ссылка</summary>

```Typescript
export class orderModal {
  orderInfo: IOrderInfo;

  checkValidAdress(adress: string) {}
  checkValidEmail(email: string) {}
  checkValidTelNum(telNum: string) {}

  toggleBtn(btnElement: HTMLButtonElement) {}
}
```
</details>


## Слой представления

## Слой просмотра

```mermaid
classDiagram
  Header <|-- basketBtn : implements
  PopupWindow <|-- ClosePopupBtn : implements
  ItemFull <|-- PopupWindow : implements
  ItemFull <|-- AddToBasketBtn : implements
  Basket <|-- PopupWindow : implements
  Basket <|-- ItemInBasket : implements
  Basket <|-- OrderBtn : implements
  OrderPopup <|-- PopupWindow : implements
  OrderPopup <|-- NextBtn : implements
  OrderPopup <|-- BuyBtn : implements
  ExitOrderSuccess <|-- ClosePopupBtn : implements
  OrderSuccess <|-- PopupWindow : implements
  OrderSuccess <|-- ExitOrderSuccess : implements

  class basketBtn {
  }

  class Header {
  }

  class ItemSmall {    
  }

  class ClosePopupBtn {
  }

  class PopupWindow {
  }

  class AddToBasketBtn {
  }

  class ItemFull {
  }

  class ItemInBasket {
  }

  class OrderBtn {
  }

  class Basket {
  }

  class NextBtn {
  }

  class BuyBtn {
  }

  class OrderPopup {
  }

  class ExitOrderSuccess {
  }

  class OrderSuccess {
  }

```

### Класс Заголовка

### Класс Товара в свернутом виде

### Класс Товара в развернутом виде

### Класс Окна корзины

### Класс Окна оформления заказа

### Класс Класс успешного оформления заказа

## Интерфейсы
### Интерфейс товара:

<details><summary>Код и ссылка</summary>

```Typescript
export interface IItem {
  id: number;
  name: string;
  description: string;
  tag: string;
  image: string;
  price: number;
  quantity?: number;
}
```
</details>

### Интерфейс данных заказа:

<details><summary>Код и ссылка</summary>

```Typescript
export interface IOrderInfo {
  paymentMethod: paymentTypes;
  address: string;
  email: string;
  telNum?: string;
}
```
</details>