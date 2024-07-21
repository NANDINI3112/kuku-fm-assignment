# Audiobook Backend

This is the backend for the Audiobook web application. The backend is built using Node.js, Express, and MongoDB. It provides a RESTful API for managing audiobook data and handling user interactions such as submitting reviews and ratings.

## Table of Contents

- [Audiobook Backend](#audiobook-backend)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [API Endpoints](#api-endpoints)
    - [Audiobooks](#audiobooks)
    - [Reviews](#reviews)
  - [Database](#database)
  - [Environment Variables](#environment-variables)
  - [Deployment](#deployment)
  - [Troubleshooting](#troubleshooting)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- RESTful API to manage audiobook data including retrieval, creation, and updates.
- Endpoints to retrieve a list of audiobooks and detailed information about a specific audiobook.
- Endpoints to submit and retrieve user reviews and ratings for audiobooks.
- MongoDB integration for data storage.
- Middleware for request handling and error management.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) are installed on your machine.
- MongoDB is installed and running locally or accessible via a cloud service.

## Installation

1. **Clone the repository**:
    ```
    git clone <repository-url>
    cd <repository-name>/backend
    ```

2. **Install dependencies**:
    ```
    npm install
    ```

This will install all the necessary packages required for the project.

## Running the Application

To run the application locally:

1. **Start the MongoDB server**: Ensure MongoDB is running locally or provide a connection string to a cloud-hosted MongoDB instance.

2. **Start the Node.js server**:
    ```
    npm start
    ```

The server will be available at `http://localhost:5000`.

## Project Structure

The project structure is organized as follows:

```
backend/
│
├── config/
│   ├── database.js
│
├── controllers/
│   ├── audiobookController.js
│   ├── reviewController.js
│
├── models/
│   ├── Audiobook.js
│   ├── Review.js
│
├── routes/
│   ├── audiobookRoutes.js
│   ├── reviewRoutes.js
│
├── data/
│   ├── audiobooks.json
│
├── server.js
├── package.json
├── README.md
```

- **config/**: Contains configuration files, such as the database configuration.
- **controllers/**: Contains the logic for handling requests and responses.
- **models/**: Contains the Mongoose schemas and models.
- **routes/**: Contains route definitions and mappings to controllers.
- **data/**: Contains seed data for initializing the database.
- **server.js**: The main entry point for the application.

## API Endpoints

### Audiobooks

- `GET /api/audiobooks`: Retrieve a list of audiobooks.
- `GET /api/audiobooks/:id`: Retrieve details for a specific audiobook.

### Reviews

- `POST /api/audiobooks/:id/reviews`: Submit a review for a specific audiobook.

## Database

The application uses MongoDB to store audiobook data and user reviews. MongoDB is a NoSQL database that allows for flexible, schema-less storage of data. Mongoose, an ODM (Object Data Modeling) library for MongoDB and Node.js, is used to define schemas and interact with the database.

### Database Configuration

The database configuration is managed in the `config/database.js` file. Ensure that the MongoDB connection string is correctly set up in this file. If you are using environment variables, make sure to set the `MONGODB_URI` variable in your environment.

## Environment Variables

The application uses environment variables to manage configuration settings. Create a `.env` file in the root of the `backend` directory and add the following variables:

```
MONGODB_URI=mongodb://localhost/audiobooks
PORT=5000
```

Adjust the values as necessary for your setup.

## Deployment

To deploy the backend application to a cloud platform such as Heroku, AWS, or any other platform, follow these steps:

1. **Ensure environment variables are set**: Configure the environment variables for your production environment.

2. **Deploy the application**: Follow the specific instructions for deploying Node.js applications on your chosen platform.

For example, to deploy to Heroku:

1. **Login to Heroku**:
    ```
    heroku login
    ```

2. **Create a new Heroku application**:
    ```
    heroku create
    ```

3. **Push the code to Heroku**:
    ```
    git push heroku master
    ```

4. **Set environment variables on Heroku**:
    ```
    heroku config:set MONGODB_URI=<your-mongodb-uri>
    heroku config:set PORT=5000
    ```

5. **Open the application**:
    ```
    heroku open
    ```

## Troubleshooting

- **MongoDB Connection Issues**: Ensure MongoDB is running and accessible. Check the connection string in the `config/database.js` file.
- **API Request Failures**: Check the server logs for error messages and ensure the backend server is running.
- **Environment Variables**: Ensure all required environment variables are set correctly.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

