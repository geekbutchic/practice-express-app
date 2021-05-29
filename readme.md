let productsArray = [
  {
    id: "1",
    name: "pants",
  },
  {
    id: "2",
    name: "shorts",
  },
  ,
  {
    id: "3",
    name: "shirts",
  },
];

STEP 1 - Instruction - spin up a brand new express app using the steps we went over in class. `COMPLETE`
NOTE - npm unit -y, npm i express morgan uuid, create app.js `COMPLETE`
task 1 - setup public folder `COMPLETE`
task 2 - setup view folder `COMPLETE`
task 3 - setup router folder `COMPLETE`
task 4 - create a file called productRouter.js inside the router folder `COMPLETE`
task 5 - require the productRouter.js file inside app.js and give it a path = "/api/product" `COMPLETE`
Code the CRUD functionality inside productRouter.js file
CRUD - CREATE, Retrieve, UPDATE, and DELETE
1.setup a GET route to retrieve all the products
2. setup a GET route to retrieve item by id
3.  setup a GET route to retrieve item by name
4. set a POST route to create a product and give it an ID
5. set a PUT route to update a product by ID