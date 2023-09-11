# Person Resource API Documentation

This documentation provides information on how to use the Person Resource API to manage and retrieve information about individuals (persons).

## Table of Contents

- [Introduction](#introduction)
- [Base URL](#base-url)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
  - [Get All Persons](#get-all-persons)
  - [Get Person by ID](#get-person-by-id)
  - [Create a New Person](#create-a-new-person)
  - [Update a Person](#update-a-person)
  - [Delete a Person](#delete-a-person)
- [Response Format](#response-format)
- [Sample Usage](#sample-usage)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [Conclusion](#conclusion)

## Introduction

The Person Resource API allows you to manage information about individuals, including their names, contact details, and other relevant data. You can use this API to create, retrieve, update, and delete person records.

## Base URL

The base URL for all API endpoints is:

https://person-details.onrender.com/api

## Endpoints

Get All Persons
Description: Retrieve a list of all persons.

# HTTP Me

HTTP Method: GET

Endpoint: /:id

Request
id (required): The ID of the person to retrieve.
Response
The response will be a JSON object containing the person's information.

{
"success": true,
"message": "Person retrieved successfully",
"data": {
"id": 1,
"first_name": "John",
"last_name": "Doe",
"email": "john@example.com"
}
}

Create a New Person
Description: Create a new person record.

HTTP Method: POST

Endpoint: /

Request
Include the person's information in the request body.

{
"first_name": "New",
"last_name": "Person",
"email": "new@example.com"
}

Response
The response will be a JSON object confirming the creation of the person.

{
"success": true,
"message": "Person created successfully",
"data": {
"id": 3,
"first_name": "New",
"last_name": "Person",
"email": "new@example.com"
}
}

Update a Person
Description: Update an existing person's information.

HTTP Method: PUT

Endpoint: /:id

Request
id (required): The ID of the person to update.
Include the updated person information in the request body.

{
"first_name": "Updated",
"last_name": "Person"
}

Response
The response will be a JSON object confirming the update of the person.

{
"success": true,
"message": "Person updated successfully",
"data": {
"id": 3,
"first_name": "Updated",
"last_name": "Person",
"email": "new@example.com"
}
}

Delete a Person
Description: Delete a person by their unique ID.

HTTP Method: DELETE

Endpoint: /:id

Request
id (required): The ID of the person to delete.
Response
The response will be a JSON object confirming the deletion of the person.

{
"success": true,
"message": "Person deleted successfully"
}

Response Format
Success Response: The response will contain a JSON object with a success field set to true and relevant data.

Error Response: The response will contain a JSON object with a success field set to false, an error message, and an optional error code.

Error Handling
The API will return appropriate HTTP status codes and error messages in case of errors. Common error codes include:

401 Unauthorized: When authentication fails.
404 Not Found: When a resource is not found.
500 Internal Server Error: For unexpected server errors.

Conclusion
This concludes the documentation for the Person Resource API.
