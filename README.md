# HNG-Backend_Task-2

A people resource CRUD API - A RESTful API for managing information about individuals (people) using MongoDB, Node.js, and Express.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the API](#running-the-api)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm/yarn installed
- Mongoose is installed and connected
- Git (optional, for cloning the repository)

## Installation

To get started with the People Resource API, follow these steps:

1. Clone the repository (or download the ZIP file):
   ```bash
   git clone https://github.com/justinndidit/HNG-Backend_Task-2.git

   ```
2. Change to the project directory:
   cd HNG-Backend_Task-2

3.Install the required dependencies::
npm install

# Configuration

The API requires a configuration file for environment-specific settings. Create a .env file in the project root and add the following configuration variables:

- PORT: The port on which the API will run.
- MONGODB_URI: The MongoDB connection URI.

# Running the API

To start the API server, run the following command:

- In Development mode
  npm run dev
- In production mode
  npm start
  Your API should now be running at http://localhost:${specified port}.

# API Documentation

Please refer to the documentation for detailed information on available endpoints, request/response formats, and sample usage.

# Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: git checkout -b feature/your-feature-name
3. Make your changes and commit them: git commit -m "Add your feature"
4. Push to your fork: git push origin feature/your-feature-name
5. Create a pull request to the main branch of the original repository.

# License

This project is licensed under the MIT License.
