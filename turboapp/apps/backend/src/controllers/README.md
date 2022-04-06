# Controllers

The controllers are called by the routes to implement that routes buisness logic and format that logic by accesing the database with an assortment of services. Once could consider the services to be the api the api uses to query the database. A route can only implement a single controller it itself which is why controllers are unique to to the routes using them, however a controller can implement numerous services to implement the buisness logic nessesary. 

Controllers used by the product routes are found in the product_controllers.ts and the ones used by the user routes are implemented in the user_controllers.ts.