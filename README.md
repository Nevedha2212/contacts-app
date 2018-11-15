# contactCRUDApp
Build A Restful CRUD Application for storing contacts using Node.js and Express

Steps to Setup
======
1.Install NPM dependencies

npm install

2. Start the server

npm start


You can hit the REST APIs deployed on HERoku at https://contacts-app-neve.herokuapp.com/contacts/

Available REST APIs

POST /create - create new contact
GET / - read all contacts
GET /first-name/:firstName - search by firstname
GET /email/:email - search by email
PUT /update/:email - update against email
DELETE /delete/:email - delete contact
GET /pagination/:start - Pagination with default limit as 2

The APIs are Basic Authorised.

Username :test1
Password :test1
