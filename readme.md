# Car Management Dashboard

Car Management Dashboard is an application used to manage car data. This application can display a list of cars, add, edit, and delete existing car data.

## How to Run

1. Git Clone
2. NPM install
3. Create .env file, copy the env variable from .env.example file
4. NPM Run Dev

Now you can run the application on your device.

### Database Table Diagram

This application using MongoDB as the database. Here's the diagram :
![table](public/images/db%20diagram.png)

#### List of API Endpoints

_localhost:8000_

Dashboard View

- Description : Retrieve the dashboard view.
- HTTP Method : GET
- Endpoint: `/dashboard`
- Usage Example: `/dashboard`

Create Car Page

- Description : Retrieve the page to create a new car.
- HTTP Method : GET
- Endpoint: `/dashboard/create`
- Usage Example: `/dashboard/create`

Edit Car Page

- Description : Retrieve the page to edit car information based on ID.
- HTTP Method : GET
- Endpoint: `/dashboard/edit/:id`
- Usage Example: `/dashboard/edit/123`

**Action API**

Add New Car

- Description : Add a new car to the system
- HTTP Method : POST
- Endpoint: `/cars/add`
- Usage Example: `/cars/add`

Delete Car

- Description : Delete car information based on ID.
- HTTP Method : GET
- Endpoint: `/cars/delete/:id`
- Usage Example: `/cars/delete/456`

Edit Car

- Description :Edit car information based on ID
- HTTP Method : POST
- Endpoint: `/cars/update/:id`
- Usage Example: `/cars/update/789`
