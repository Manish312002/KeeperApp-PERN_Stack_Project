# KeeperApp

KeeperApp is a user-friendly note-taking application that allows you to capture and organize your thoughts efficiently. Built with React on the frontend and Express.js on the backend, it uses PostgreSQL for robust data storage.

## Features

- **Create Notes**: Easily add new notes with titles and content.
- **Manage Notes**: View and delete notes with a simple interface.
- **Responsive Design**: Works seamlessly across different devices.

## Technologies

- **Frontend**: React, Material-UI
- **Backend**: node.js, Express.js
- **Database**: PostgreSQL

## Getting Started

To get started with KeeperApp, follow these instructions.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Manish312002/keeperapp.git
    cd keeperapp
    ```

2. **Install dependencies for the frontend:**

    ```bash
    cd Client
    npm i
    ```

3. **Install dependencies for the backend:**

    ```bash
    cd ../Server
    npm i
    ```

4. **Set up the database:**

    - Create a PostgreSQL database.
    - Update the database configuration in `backend/index.js` with your database credentials.

5. **Run the backend server:**

    ```bash
    cd Server
    nodemon index.js
    ```

6. **Run the frontend application:**

    ```bash
    cd ../Client
    npm run dev
    ```

The frontend Client will be available at `http://localhost:3000` and the backend Server API at `http://localhost:3000/api`.

## Usage

1. Open the KeeperApp in your browser.
2. Use the form to create new notes.
3. View, edit, or delete your notes as needed.

## Contributing

Feel free to open issues or submit pull requests. Please follow the coding guidelines and ensure all tests pass before submitting.

