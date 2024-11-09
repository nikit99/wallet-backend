# Wallet Backend System

## Overview
This project is a **Wallet Backend System** API built with **Node.js**, **Express.js**, and **MySQL**. It provides functionalities for users to top-up, deduct, and check their wallet balance. The system supports concurrent requests and is optimized for performance using **PM2**.

## Features
- **Top-up**: Add funds to the wallet.
- **Deduct**: Deduct funds from the wallet.
- **Balance**: Check wallet balance.
- **Concurrency Support**: Uses **PM2** to handle multiple requests concurrently for improved performance.

## Tech Stack
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building APIs.
- **MySQL**: Relational database for storing wallet information.
- **PM2**: Production process manager for Node.js, used for load balancing and clustering.

## Setup

### Prerequisites
Before you begin, make sure you have the following installed:
- **Node.js** and **npm** (Node Package Manager)
- **PM2** (for production use)
- **MySQL** database running locally or remotely

### Installation Steps

1. Clone the repository:

   git clone https://github.com/nikit99/wallet-backend.git
   cd wallet-backend


2. Install dependencies: Run the following command to install all required npm packages:
   npm install

3. Set up MySQL Database:
   a. Log in to your MySQL database and create a new database
        CREATE DATABASE wallet_db;

   b. Create a table wallets in the wallet_db database:
        CREATE TABLE wallets (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        balance DECIMAL(10, 2) DEFAULT 0.00
        );
   
   c. Configure Database Connection:
        Create a .env file in the root directory of the project with the following content'

        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=yourpassword
        DB_NAME=wallet_db
        PORT=3001
   
   d. Start the server:
        I.  For development, you can run the server using:
            npm start
        II. For production, use PM2 for clustering and load balancing:
            pm2 start server.js -i max

4. API Endpoints:

    a. POST /topup
    Adds funds to a user's wallet.

    Request Body:
        {
            "user_id": "string",
            "amount": "number"
        }
    Response:
        {
            "message": "Funds added successfully",
            "balance": "number"
        }
    
    b. POST /deduct

    Request Body:
        {
        "user_id": "string",
        "amount": "number"
        }

    Response:
        {
        "message": "Funds deducted successfully",
        "balance": "number"
        }

    c. GET /balance

        {
        "user_id": "string"
        }
    
    Response:
        {
        "balance": "number"
        }

5. Running Tests:
    npm test

6. Deployment
    For Production:
    In production environments, it's recommended to use PM2 to manage the server and handle multiple requests efficiently. Here's how to run it:

    a. Start the app using PM2:
        pm2 start server.js -i max
        This will launch the server on all available CPU cores.
    
    b. Monitor the app: You can monitor the app using the following command:
        pm2 monitor

    c. Set PM2 to auto-start on reboot: To ensure your app automatically restarts on server reboot, use  the following command:
         
        pm2 startup
        pm2 save
    

7. Contact:
    For feedback or issues, please reach out to [nikitojha99@gmail.com].

    






