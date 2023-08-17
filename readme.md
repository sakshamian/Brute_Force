# Loyalty Points Program

## Introduction
This Loyalty Points Program application integrates a web-based interface developed using React.js with a backend powered by Node.js, Express.js, and MongoDB. The system also utilizes Ethereum smart contracts, written in Solidity, to manage and track the distribution of loyalty points, ensuring transparency and security. Users can easily connect their Ethereum accounts via MetaMask to view and transact their loyalty points.

## Features

1. **Web Interface (React.js)**: Allows users to:
   - Register/login
   - View their loyalty points balance
   - Redeem loyalty points
   - View transaction history

2. **Backend (Node.js, Express.js, MongoDB)**:
   - User authentication and management
   - Integration with MongoDB for storing user data and transaction histories

3. **Smart Contract (Solidity)**:
   - Secure distribution of loyalty points
   - Transparent tracking of loyalty points distribution
   - Functions for redeeming points and viewing balance

4. **MetaMask Integration**:
   - Connects users' Ethereum accounts to the application
   - Allows users to view and manage their loyalty points balance directly from MetaMask

## Pre-requisites

- **Software & Libraries**:
  - Node.js & npm
  - MongoDB
  - MetaMask browser extension

- **Knowledge**:
  - Basic understanding of JavaScript, React.js, and Node.js
  - Familiarity with Ethereum, Solidity, and smart contracts

## Setup & Installation

### 1. Frontend Setup

```bash
# Navigate to the frontend directory
cd frontend

# Install necessary packages
npm install

# Start the React development server
npm start

```

### 2. Backend Setup

```bash
# Install necessary packages in root directory
npm install

# Set environment variables (Create a .env file and add following)
PORT = 8000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'

# Start the server (ensure MongoDB is running)
npm start

```

### 3. Metamask Setup

1. Install the MetaMask browser extension.
2. Set up or import an Ethereum account.
3. Connect to the appropriate network when the smart contract is deployed.
4. Interact with the application and manage loyalty points directly from MetaMask.

### 4. Smart Contract Deployment

```bash
# Navigate to  environment variables (Create a .env file and add following)
cd Contract
```
1. Import the solidity file Xpresscoins.sol in remix ide.
2. Compile the contract.
3. Deploy the contract.
4. Copy the abi of deployed contract and paste in in tokensABI.json in frontend/src/web3.
5. Copy the smart contract address and paste it in coinServices.js in frontend/src/web3.


## Usage
1. Register/login via the web interface.
2. Connect your Ethereum account using MetaMask.
3. Earn, view, or redeem loyalty points.
4. View transaction history for detailed insights into your loyalty points activity.

## Contributors
1. [Ridhima Kohli](https://www.linkedin.com/in/ridhima-kohli-8494b6230/)
2. [Vedant Joshi](https://www.linkedin.com/in/vedant-joshi-6587a8248/)
3. [Saksham Negi](https://www.linkedin.com/in/sakshamian/)
