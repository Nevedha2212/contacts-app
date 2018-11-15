# contactCRUDApp
Build A Restful CRUD Application for storing contacts using Node.js and Express

Steps to Setup
==============
1.Install NPM dependencies

npm install

2.Start the server

npm start


You can hit the REST APIs deployed on HEROku at https://contacts-app-neve.herokuapp.com/contacts/

Available REST APIs
===================

1.POST /create - create new contact

2.GET / - read all contacts

3.GET /first-name/:firstName - search by firstname

4.GET /email/:email - search by email

5.PUT /update/:email - update against email

6.DELETE /delete/:email - delete contact

7.GET /pagination/:start - Pagination with default limit as 2

The APIs are Basic Authorised.

Username :test1

Password :test1
