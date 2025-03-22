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
    class basketModal
    basketModal : +addItem(id)
    basketModal : +removeItem(id)
    basketModal : +getTotalPrice()
    basketModal : +getTotalItems()
```