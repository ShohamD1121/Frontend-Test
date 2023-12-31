﻿# Frontend-Test

This Frontend-Test is a React application that allows users to select items from a dropbox, add them to boxes, and view the item list with the total price.

Try the live app Here: https://shohamd1121.github.io/Frontend-Test/

## Components

### DropBox

The `DropBox` component displays a dropdown menu of items. When an item is selected, it is removed from the dropbox and added to the boxes.

### Boxes

The `Boxes` component displays a grid of boxes. When an item is added to a box, it is displayed in the respective box. If an item is out of stock, an alert is shown.

### ItemList

The `ItemList` component displays the selected items in a list. It also shows the total price of the items. Users can submit the item list.

## Redux Store

The application uses Redux for state management. The following slices are used:

- `dropBoxItems`: Stores the items in the dropbox.
- `boxesItems`: Stores the items in the boxes.
- `itemList`: Stores the selected items for the final submit.
- `totalPrice`: Stores the total price of the selected items.

## API Integration

The application makes use of API calls to fetch and send data. The following API functions are used:

- `fetchItems()`: Fetches items from the API and sets them in the `dropBoxItems` slice.
- `sendItemList()`: Sends the item list to the API. However, please note that the sendItemList() function may not work on deployment, but is totaly fine on local development.

## Styling

The application uses SCSS for styling. The styles are organized into separate SCSS files for each component.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project directory>`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://127.0.0.1:5173/Frontend-Test/` to view the app.
