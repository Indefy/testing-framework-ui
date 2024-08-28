# Testing Client

This repository contains the frontend of the testing framework, built with React. It interacts with the backend API to display test results, manage settings, and provide a user-friendly interface for users to interact with the testing framework.

## Table of Contents

- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/testing-client.git
    ```

2. Navigate to the project directory:

    ```bash
    cd testing-client
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your environment variables:

    ```bash
    REACT_APP_API_URL=http://localhost:5000
    ```

### Running the App

To start the app in development mode, run:

```bash
npm start
```
The app will open in your default web browser at `http://localhost:3000`.

This will launch the test runner in the interactive watch mode.

### Building the App

To build the app for production, run:

```bash
npm run build
```

This will create a `build` directory with the production build of your app.

## Configuration

The app is configured using environment variables. Ensure that the `.env` file is properly set up with the required API URL:

```plaintext
REACT_APP_API_URL=http://localhost:5000
```

## API Endpoints

This app interacts with the following backend API endpoints:

- **GET /api/tests**: Fetches the list of test results.
- **GET /api/settings**: Fetches the current settings.
- **POST /api/settings**: Updates and saves settings.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **MUI**: Material-UI, a popular React UI framework.

### Created by Adi Booekr
