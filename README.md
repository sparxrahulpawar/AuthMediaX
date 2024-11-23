# 🌟 Advanced User Management and Media Sharing Platform 🌟

An advanced project using **Node.js** and **React.js** to build a feature-rich platform with modern authentication, media uploads to AWS S3, and advanced API handling.

---

## 📖 **Table of Contents**

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ **Features**

- 🌐 OAuth login via **Google**, **Facebook**, **Instagram**, and **WhatsApp**.
- 🔐 User authentication via phone and email with OTP verification.
- 📤 Media uploads (images/videos) stored securely in **AWS S3**.
- 🔍 Advanced API functionalities: Pagination, Filtering, Rate Limiting, and Caching.
- 🚀 Deployed and monitored using **AWS EC2**, **CloudWatch**, and **RDS**.

---

## 🛠️ **Tech Stack**

### **Backend (Node.js)**

- **Node.js** with **Express.js** for REST APIs.
- **MongoDB** or **PostgreSQL** for the database.
- **AWS SDK** for S3 integration.
- **Twilio/WhatsApp Cloud API** for OTP.

### **Frontend (React.js)**

- **React.js** for building the UI.
- **Axios** for API calls.
- **React Router** for navigation.

---

## 🚀 **Getting Started**

### Prerequisites

- **Node.js** (v16+)
- **npm** or **yarn**
- **MongoDB** or **PostgreSQL** database
- AWS account for S3, EC2, and RDS setup.

### Installation

Refer to the [Installation Section](#installation) for detailed steps.

---

## 📂 **Folder Structure**

#### **Backend (Node.js)**

```bash
npm install express sequelize pg pg-hstore dotenv body-parser twilio aws-sdk bcryptjs jsonwebtoken cors helmet morgan
npm install nodemon --save-dev
npm install --save-dev sequelize-cli
npx sequelize-cli init
```

```plaintext
backend/
├── src/
│   ├── config/              # Configuration files (DB, environment variables)
│   │   └── db.js            # Database connection setup
│   ├── controllers/         # Request handlers for routes
│   │   ├── authController.js
│   │   └── mediaController.js
│   ├── middlewares/         # Middleware for authentication, error handling, etc.
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/              # Database models
│   │   ├── User.js
│   │   └── Media.js
│   ├── routes/              # API route handlers
│   │   ├── authRoutes.js
│   │   └── mediaRoutes.js
│   ├── services/            # Business logic (OTP, AWS S3, etc.)
│   │   ├── otpService.js
│   │   └── s3Service.js
│   ├── utils/               # Utility functions
│   │   └── generateToken.js
│   ├── app.js               # Express app setup
│   └── server.js            # Main server entry point
├── .env                     # Environment variables
├── package.json             # Node.js dependencies and scripts
└── README.md                # Project documentation
```

#### **Frontend (React.js)**

```bash
npm install react-router-dom axios jwt-decode react-oauth/google react-facebook-login react-instagram-login react-redux redux toolkit react-hook-form styled-components @mui/material @emotion/react @emotion/styled react-dropzone react-bootstrap bootstrap react-devtools

```

```plaintext
frontend/
├── public/                  # Static assets and HTML entry file
│   └── index.html           # Main HTML template
├── src/
│   ├── api/                 # Axios-based API utility functions
│   │   └── authApi.js
│   ├── components/          # Reusable React components
│   │   ├── Auth/
│   │   │   ├── LoginForm.js
│   │   │   └── SignupForm.js
│   │   ├── Media/
│   │   │   ├── MediaUpload.js
│   │   │   └── MediaList.js
│   │   └── Shared/
│   │       └── Navbar.js
│   ├── pages/               # Pages for routing
│   │   ├── Dashboard.js
│   │   ├── Login.js
│   │   └── Signup.js
│   ├── context/             # Global state management using Context API
│   │   └── AuthContext.js
│   ├── styles/              # Global CSS and theming
│   │   └── global.css
│   ├── App.js               # Root React component
│   ├── config.js            # Application configurations (API base URL, etc.)
│   └── index.js             # Main entry point for React app
├── .env                     # Environment variables for the frontend
├── package.json             # Dependencies and scripts
└── README.md                # Documentation
```
