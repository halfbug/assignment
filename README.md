# MERN FullStack Assessment

One common aspect of ride hailing and rider fleet management systems is to identify drivers in close proximity. 

`This exercise focuses on this very aspect. I have try to meat goal i.e. to create APIs for create, update, and retrieve for drivers' location.` 

The backend is on mongodb atlas. The file structure have three main folders 
1. Model : contains mongoose schema file.
2. Route : contains routes .
3. Controllers : contains all funtionality.

The other configurations are inside config folder.

## API Details:

### Create : 
Registration of a new driver, this POST API accept, in a JSON, a vehicle registration number and the driver's name, his current location can be optional. 
This will create relevant DB documents and return the DB ID generated.

### Update:
This PUT API will update the information for the driver. 

### Retrieve : 
The get api returns all the drivers with in 1km. I have use [geojson](https://github.com/halfbug/assignment/blob/master/models/Driver.js#L17) mongo db field to store location and use [aggregation](https://github.com/halfbug/assignment/blob/master/controllers/driver.js#L93) query to retrive them.

### Installation

> npm install

## To start devlopment backend use 
the server will utalize 5000 port and the url will be : http://localhost:5000/api/v1/
> npm run dev

### and for production
>npm start

### Postman collection link : 
https://documenter.getpostman.com/view/2520380/SzzoaFuF?version=latest#36a082a1-f959-40b8-acab-97c8e6838b35
also add postman collection exported file inside `postmanCollection`  folder.
