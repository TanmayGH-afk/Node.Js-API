# Node.Js-API

API Documentation:

The Shopping Portal API provides endpoints to manage products within a shopping portal. Users can perform CRUD (Create, Read, Update, Delete) operations on products. The API allows users to retrieve all products, fetch a specific product by its ID, delete a product, create a new product, and update an existing product.

1. Get all products
Endpoint: GET /api/products/
Description: Retrieves a list of all products.
Response: Returns an array of product objects.

2. Get product by ID
Endpoint: GET /api/products/:id
Description: Retrieves a product by its ID.
Parameters: id (integer) - ID of the product to retrieve.
Response: Returns a single product object if found, otherwise returns a 404 error.

3. Delete product by ID
Endpoint: DELETE /api/products/:id
Description: Deletes a product by its ID.
Parameters: id (integer) - ID of the product to delete.
Response: Returns a success message if deletion is successful, otherwise returns a 404 error.

4. Create a new product
Endpoint: POST /api/products/
Description: Creates a new product.
Request Body: JSON object containing title, description, and status of the product.
Response: Returns the newly created product object with a status code of 201 if successful, otherwise returns a 500 error.

5. Update product by ID
Endpoint: PUT /api/products/:id
Description: Updates a product by its ID.
Parameters: id (integer) - ID of the product to update.
Request Body: JSON object containing title, description, and status of the product to update.
Response: Returns the updated product object if successful, otherwise returns a 404 error.


----------------------

To retrieve all products:

GET /api/products/
To retrieve a product by ID:


GET /api/products/:id
To delete a product by ID:


DELETE /api/products/:id
To create a new product:


POST /api/products/
{
  "title": "New Product",
  "description": "Description of the new product",
  "status": "instock"
}
To update a product by ID:


PUT /api/products/:id
{
  "title": "Updated Product",
  "description": "Updated description",
  "status": "outofstock"
}


