# ica-test
A simple test for front-end and back-end developers using NodeJS and Angular.

# Requirements
Node: v6.4.0
NPM: 3.10.3
Git: 2.11.1

# Install
Clone this repo using the clone button.

`cd <ica-test folder>`

`npm install`

`npm start`

Then go to [http://localhost:3000/](http://localhost:3000/) and you should see the app running.

If you want to see debug messages, use `DEBUG=ica-test:server:* npm start` instead

# Methods implemented
Implement the algorithm inside routes/products.js for creating, updating and deleting products.
  - DONE

Implement client-side buttons for editing products in the following behaviour:
* An edit button in every item of the list
    - DONE
* Upon clicking the button, the user will be prompted (using any method) for a new name
    - DONE
* After confirming this new name, implement and call the controller method using the appService
    - DONE
* The updated item should be retrievable when you click on GET PRODUCTS button
    - DONE
* Plus: Update the item inside the list automatically
    - DONE

Implement client-side buttons for deleting products in the following behaviour:
* A delete button in every item of the list
    - DONE
* Upon clicking the button, the user must confirm his choice (using any method) to either confirm or cancel the operation
    - DONE
* After confirming, implement and call the controller method using the using the appService
    - DONE
* The deleted item should be gone once your click on GET PRODUCTS button
    - DONE
* Plus: Delete the item inside the list automatically
    - DONE

OPTIONAL: Create a new route to retrieve the list of products ordered by name alphabetically.
  - DONE

Plus: Change the GET /products instead to support a sortBy argument
  - NOT IMPLEMENTED

OPTIONAL PLUS: Implement pagination using the offset and limit options:
  - NOT IMPLEMENTED

* Bring only the first 5 items, then have a Load More button
* When clicking this button, load 5 more items until all of them are loaded
* Upon reaching the limit AND when loading, make the Load More button disabled or hidden

