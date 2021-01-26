# Application running assumption
```
If you have followed all the instructions in "README.md" so you already have 1 location data & 1 customer data that have been seeded in the database.
On the client side in the Login page, you can choose to login as an admin or a customer. Because this application don't needed users authentication, so if you Login as customer, you will be assumed to have logged in as a registered user that have been seeded before in the database.
The different between "Admin" and "Customer is:
1. Admin can create new ticket event in Event Details page but can't do purchase of those tickets
2. Customer can do purchase of that event tickets in Event Details page but can't create new event ticket

To change the user role just go to login page in the client GUI

*If you want to know the data that I have been seeded into the database you can check files in folders "/server/seeders"*
```