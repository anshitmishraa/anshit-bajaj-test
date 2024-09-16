# Bajaj Backend API

Welcome to the Bajaj Backend API project! This repository contains a simple Node.js server built with Express.js, designed to handle specific API requests for processing data.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [GET /](#get-)
  - [POST /bfhl](#post-bfhl)
- [Error Handling](#error-handling)

## Project Overview

The Bajaj Backend API is a basic Express.js application that provides endpoints for interacting with backend services. It includes a simple route to test server connectivity and a POST route for processing and categorizing input data into numbers and alphabets.

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/anshitmishraa/bajaj-backend-api.git
    cd bajaj-backend-api
    ```

2. **Install Dependencies**

    Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:

    ```bash
    npm install
    ```

3. **Start the Server**

    ```bash
    npm start
    ```

    The server will start and listen on port `4000`. You should see the following output:

    ```bash
    Server is running at 4000
    ```

## Usage

The API has two primary endpoints:

1. **GET /**

    - **Description:** A basic route that returns a welcome message.
    - **URL:** `/`
    - **Method:** `GET`
    - **Response:**
      ```json
      "Bajaj Backend API"
      ```

2. **POST /bfhl**

    - **Description:** Processes an array of data provided in the request body and categorizes the values into numbers and alphabets.
    - **URL:** `/bfhl`
    - **Method:** `POST`
    - **Request Body:**
      ```json
      {
        "data": ["value1", "value2", ...]
      }
      ```
    - **Response:**
      ```json
      {
        "is_success": true,
        "user_id": "anshit_mishra_11901808",
        "email": "anshit.1111@gmail.com",
        "roll_number": "11901808",
        "numbers": ["number1", "number2", ...],
        "alphabets": ["alphabet1", "alphabet2", ...]
      }
      ```
    - **Example Request:**
      ```bash
      curl -X POST http://localhost:4000/bfhl -H "Content-Type: application/json" -d '{"data":["123", "abc", "456", "def"]}'
      ```
    - **Example Response:**
      ```json
      {
        "is_success": true,
        "user_id": "anshit_mishra_11901808",
        "email": "anshit.1111@gmail.com",
        "roll_number": "11901808",
        "numbers": ["123", "456"],
        "alphabets": ["abc", "def"]
      }
      ```

## Error Handling

In case of an error during the processing of the `/bfhl` endpoint, the server will respond with a `400 Bad Request` status and an error message:

- **Response (Error Case):**
  ```json
  {
    "is_success": false,
    "user_id": "anshit_mishra_11901808",
    "email": "anshit.1111@gmail.com",
    "roll_number": "11901808",
    "numbers": [],
    "alphabets": []
  }
  ```

  The error details will also be logged to the console.