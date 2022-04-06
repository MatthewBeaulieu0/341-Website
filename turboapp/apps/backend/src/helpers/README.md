# Helpers

An assortment of generic functions used all over the backend. Implemented as isolated function files in order to keep the code DRY and prevent refactoring from becoming very costly.

## links_helper

Helper functions that work with parsing the links data filed on the user which concerns the links of the images story in memory.

## order_helper

Helper functions that parse the orders datastructure stored on the users.orders field.

## query_helper

Helper function used in all services to query in a safe async way and also used to prevent SQL injection.