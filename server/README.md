# Loket App Server
Loket App is an application to manage online Loket reservation. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

## Project setup
```
1. In your terminal run command "npm install"
2. In your terminal run command "npm install -g nodemon"
3. In "config.json" in "config" folder, change the password and username according to your postreSQL settings
4. In your terminal run command "npx sequelize db:create"
5. In your terminal run command "npx sequelize db:migrate"
6. In your terminal run command "npx sequelize db:seed:all"
7. Read the "ASSUMPTIONS.md" for assumptions in the use of this program
```
*if installation error please check your internet connection*
### Compiles and hot-reloads for development
```
npm run dev
```
---
## RESTful endpoint
### GET /event/get_info/:id
> Get event details

*Request Params*
```
{
    "url": `http://localhost:3000/event/get_info/${<event id>}`
}
```
*Request Header*
```
not needed
```
*Request Body*
```
not needed
```
*Response (200)*
```
{
    "id": "21c22c28-853a-4218-b3f0-d27f9dba579a",
    "name": "Healty Gym",
    "start_date": "2021-01-21T17:00:00.000Z",
    "end_date": "2021-02-13T17:00:00.000Z",
    "LocationId": "e0deba80-8bcc-41b1-829b-7dc79bc38fe5",
    "createdAt": "2021-01-22T10:28:07.733Z",
    "updatedAt": "2021-01-22T10:28:07.733Z",
    "Location": {
        "id": "e0deba80-8bcc-41b1-829b-7dc79bc38fe5",
        "address": "Kebon Jeruk",
        "city": "Jakarta",
        "createdAt": "2021-01-22T10:23:29.075Z",
        "updatedAt": "2021-01-22T10:23:29.075Z"
    }
}
```
*Response (500 - Internal Server Error)*
```
{
    "errors": [
        "Internal Server Error"
    ]
}
```

### POST /event/create
> Create new event

*Request Header*
```
not needed
```
*Request Body*
```
{
  "name": "<name to get insert into>",
  "start_date": "<date to get insert into>",
  "end_date": "<date to get insert into>",
  "LocationId": "<location id get from Locations table to get insert into>"
}
```
*Response (201 - Created)*
```
{
    "message": "Event success to create",
    "id": "ac5040a5-05e1-4c5a-9ec6-9ad2db1b3220",
    "name": "Ngopi Sehat"
}
```
*Response (500 - Internal Server Error)*
```
{
    "errors": [
        "Internal Server Error"
    ]
}
```

### POST /location/create
> Create new location

*Request Header*
```
not needed
```
*Request Body*
```
{
  "address": "<address to get insert into>",
  "city": "<city to get insert into>"
}
```
*Response (201 - Created)*
```
{
    "message": "Location success to create",
    "id": "b3fff3e8-b8b0-441d-b5a7-ce18be5cee70",
    "address": "Perumahan Tatakapuri"
}
```
*Response (500 - Internal Server Error)*
```
{
    "errors": [
        "Internal Server Error"
    ]
}
```

### POST /event/ticket/create
> Create new ticket

*Request Header*
```
not needed
```
*Request Body*
```
{
    "name": "<name to get insert into>",
    "type": "<type to get insert into>",
    "price": <price to get insert into>,
    "quota": <price to get insert into>,
    "EventId": "<event id from Events table to get insert into>"
}
```
*Response (201 - Created)*
```
{
    "message": "Success to create ticket",
    "ticket": {
        "id": "cd5dd3f4-f23e-463a-9957-6add21afa144",
        "name": "Greenfood VVIP",
        "type": "VVIP",
        "price": 100200,
        "quota": 20,
        "EventId": "70f408f9-81b2-49f2-9110-53770c18eb1a",
        "updatedAt": "2021-01-24T17:54:56.840Z",
        "createdAt": "2021-01-24T17:54:56.840Z"
    }
}
```
*Response (500 - Internal Server Error)*
```
{
    "errors": [
        "Internal Server Error"
    ]
}
```

### GET /transaction/get_info/:id
> Get transaction details

*Request Params*
```
{
    "url": `http://localhost:3000/transaction/get_info/${<transaction id>}`
}
```
*Request Header*
```
not needed
```
*Request Body*
```
not needed
```
*Response (200)*
```
[
    {
        "id": "b84be485-0a90-434b-b98b-5f1887aaa643",
        "quantity": 2,
        "total": 101000,
        "status": true,
        "TicketId": "8823222f-8629-4e2a-819f-ed6f3e851104",
        "TransactionId": "0d592eba-d2b8-480f-ad78-24af491f292c",
        "createdAt": "2021-01-24T13:36:19.014Z",
        "updatedAt": "2021-01-24T16:10:36.199Z",
        "Ticket": {
            "id": "8823222f-8629-4e2a-819f-ed6f3e851104",
            "name": "Lari 1k",
            "type": "Reguler",
            "price": 50500,
            "quota": 42,
            "EventId": "e2c128ce-9c6a-44d1-b1bd-caf9b4956cd8",
            "createdAt": "2021-01-24T04:27:01.782Z",
            "updatedAt": "2021-01-24T16:17:38.192Z"
        }
    },
    ...
]
```
*Response (500 - Internal Server Error)*
```
{
    "errors": [
        "Internal Server Error"
    ]
}
```

### POST /transaction/purchase
> Create new transaction

*Request Header*
```
not needed
```
*Request Body*
```
{
    "CustomerId": "<customer id from Events table to get insert into>"
}
```
*Response (201 - Created)*
```
{
    "message": "Transaction success",
    "data": [
        1,
        [
            {
                "id": "a3790352-3acc-483c-8793-adcbf0bf1696",
                "quantity": 1,
                "total": 50500,
                "status": true,
                "TicketId": "8823222f-8629-4e2a-819f-ed6f3e851104",
                "TransactionId": "854ddc3f-369c-4062-b036-641e7dc86c97",
                "createdAt": "2021-01-26T04:44:52.219Z",
                "updatedAt": "2021-01-26T04:49:42.217Z"
            }
        ]
    ]
}
```
*Response (500 - Internal Server Error)*
```
{
    "errors": [
        "Internal Server Error"
    ]
}
```