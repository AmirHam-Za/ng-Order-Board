1. ~~Project setup with base design.~~
    1. ~~Initial ng setup.~~
    2. ~~Create git repository.~~ 
    3. ~~Tailwind configaration.~~
    4. ~~Create the required UI design.~~
    5. ~~Create a dashboard component.~~
    6. ~~Implement the UI design in the dashboard component.~~
    7. ~~Check if the design suits in the dashboard as expected.~~

2. ~~Database setup.~~
    1. ~~Install json-server.~~
    2. ~~Install concurrently.~~
    3. ~~Add concurrently command in script in package.json file.~~
    4. ~~Create 'data' folder in root and create 'db.json' file in it.~~
    5. ~~In 'db.json' file, create specific data for the Order Board Application.~~
    6. ~~Run the application with concurrently command.~~
    7. ~~Check if data from db.json work in the browser~~.

3. ~~Show dynamic data from database in the related box.~~
    1. ~~Call data in dashboard.component.ts file from database of local json-server.~~
    2. ~~Handle error using error handler.~~
    3. ~~Check in the console if the data called properly.~~
    4. ~~Create a component named OrderTypeComponent for all boxes and implement it in the DashboardComponent.~~
    5. ~~Create a component named OrderComponent for all orders and implement it in the OrderTypeComponent.~~
    6. ~~Show the dynamic data from DashboardComponent in Order.component.html.~~
    7. ~~Refactor code & structure.~~

4. ~~Implement drag and drop options.~~
    1. ~~Add angular drag and drop options in the project.~~
    2. ~~Check if drags and drop options works.~~

5. ~~Let dynamic data change it’s status along with drag and drop.~~
    1. ~~By dropping an order in a box, an api should be called and changes the order's status according to the box.~~
    2. ~~Manage api calling interaction with drag and drop operation.~~
    3. ~~Check if api calling and drag & drop option works properly as it should be.~~
    4. ~~Refactor code and structure.~~

6. ~~Refactor and structure.~~

7. ~~create a Add Order button.~~
    1. ~~Create "Add Order" button on the right of the header.~~
        2. ~~Add SVG icon on the left of the button text.~~

8. ~~When clicking the Add Order button a popup should open.~~
    1. ~~Design the UI of the popup including input field(s) and submit button in a different project.~~
    2. ~~Add the popup in the specific component of our project.~~
    3. ~~Implement click event functionality in the "Add Order" button with the popup opening. ~~
    4. ~~Check if the pop up works accordingly the button is clicked.~~

9. ~~After adding data, if Click the submit button, Order should be added in the server.~~
    1. ~~Impement Data binding option in the input field of the popup.~~
    2. ~~Create the api calling function to add a new Order.~~
    3. ~~Add a click event in the submit button to execute api calling function.~~
    4. ~~Check in the console if the api calling function works when the submit button is clicked.~~
    5. ~~Show the newly added Order in the first Order box(New Order).~~  

10. Refactor and restructure

11. Items data should be placed in the server.
    1. Create specific data object with specific format with "items" end point.
    2. Items object have three properties- itemType, typeTitle and typePrice.
    3. Each property should have it’s relavant data. 
    4. Approve the data.
    5. Place the data in the json server.
    6. run the app and check the data in the browser.

12. Users can add an order on the basis of the items data.
    1. Create an "Add Order" buttons to create an order
    2. By clicking it, a modal will open with certains fields and buttons 
    3. An api called for First select option to select item title from "items" in json server.
    4. Another api called for type select and peice input option.
    5. Need "Add Item" button to add item(s) in the modal.
    6. Item shows with title, type, price in the modal.
    7. Total price should be shown below the item list in the modal.
    8. After selecting a certain title from the api, then the related types and then the related price should be shown by another api calling based on the uuid of the title .
    9. Users can add multiple items in an order and can see the total price.
    10. After adding certain items user can save it as an in the json server.
    11. Finally the order will be shown in the first order box.
