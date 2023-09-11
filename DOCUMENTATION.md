# Person Resource API Documentation

This documentation provides information on how to use the Person Resource API to manage and retrieve information about individuals (persons).

## Table of Contents

- [Introduction](#introduction)
- [Base URL](#base-url)
- [Endpoints](#endpoints)
  - [Get Person by ID](#get-person-by-id)
  - [Create a New Person](#create-a-new-person)
  - [Update a Person](#update-a-person)
  - [Delete a Person](#delete-a-person)
- [Response Format](#response-format)
- [Error Handling](#error-handling)
- [Data Validation](#data-Validation)
- [Usage](#usage)
- [Conclusion](#conclusion)

## Introduction

    The Person Resource API allows you to manage information(name) about individuals, You can use this API to create, retrieve, update, and delete person records, i.e Supports CRUD operations.

## Base URL

The base URL for all API endpoints is:

    https://person-details.onrender.com/api

## Endpoints

# Create a New Person

# Description:

    Create a new person record.

# HTTP Method:

    POST

# Endpoint:

    /api

# Request

    Include the person's information(name) in the request body.
    Information (name) is required and must be of type String.

e.g
{
"name": "Favour"
}

# Response

    The response will be a JSON object confirming the creation of the person.

e.g
{
"status": "Success",
"message": "Person created successfully",
"data": {
"name": "Favour Olasoji",
"id": "64ff7b927ff4d12a4a0b16a2"
}
}

# Get a Person

# Description:

    Get an existing person's information.

# HTTP Method:

    GET

# Endpoint:

    /:id

# Request

    id (required): The ID of the person to acquire.

# Response

    The response will be a JSON object confirming the update of the person.

e.g
{
"status": "Success",
"message": "Person retrieved successfully",
"data": {
"id": "64ff825597351f8969b6d060",
"name": "Favour Olasoji"
}
}

# Update a Person

# Description:

    Update an existing person's information.

# HTTP Method:

    PUT

# Endpoint:

    /:id

# Request

    id (required): The ID of the person to update.
    Include the updated person information in the request body.

e.g
{
"name": "Updated",
}

# Response

    The response will be a JSON object confirming the update of the person.

e.g
{
"status": "Success",
"message": "User details Updated successfully",
"data": {
"id": "64ff7b927ff4d12a4a0b16a2",
"name": "Favour Olasoji"
}
}

# Delete a Person

# Description:

    Delete a person by their unique ID.

# HTTP Method:

    DELETE

# Endpoint:

    /:id

# Request

# id (required):

    The ID of the person to delete.

# Response

    Response will have a status code of 204 - no content

# Response Format

    # Success Response:
        The response will contain a JSON object with a status field set to success and relevant data.

    # Error Response:
        The response will contain a JSON object with a status field set to Failed/Error depending on the error type, an error message, and an optional error code.

# Error Handling

    The API will return appropriate HTTP status codes and error messages in case of errors.

    Common error codes include:

        400 Bad Request: When input validation fails, or wrong input is gotten.
        404 Not Found: When a resource is not found.
        500 Internal Server Error: For unexpected server errors.

# Data Validation:

    The API ensures that the data passed is of Type String.

# Usage:

    One can fetch resource using various methods.
    e.g

    async function getPerson(id) {
        const data = await fectch(' https://person-details.onrender.com/api');
        console.log(data)
    }

# Conclusion

    The API uses mongoDB as the database. This concludes the documentation for the Person Resource API.
