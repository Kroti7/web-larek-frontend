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

# Документация
Приложение использует архитектуру **MVP**, основная логика разделена на логику для корзины и логику для заказа. Сделано это для изолирования модулей, будущего расширения приложение и переиспользования модулей.

```mermaid
classDiagram
  classDef interface fill:#028
  classDef class fill:#33d
  basketModal <|-- IItem : implements
  orderModal <|-- IOrderInfo : implements

  class basketModal:::class {
    +basket
    +addItem(id)
    +removeItem(id)
    +getTotalPrice()
    +getTotalItems()
  }

  class IItem:::interface {
    <<interface>>
    id: number
    name: string
    description: string
    tag: string
    image: string
    price: number
    quantity: number
  }

  class orderModal:::class {
    orderInfo
    checkValidAdress(adress)
    checkValidEmail(email)
    checkValidTelNum(telNum)
    toggleBtn(btnElement)
  }

  class IOrderInfo:::interface {
    <<interface>>
    paymentMethod: paymentTypes;
    address: string;
    email: string;
    telNum?: string;
  }

```