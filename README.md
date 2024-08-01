
# Node.js Authentication Backend

This project is a Node.js backend service developed for handling user authentication. It includes essential features such as secure user registration, login, and password management. The project uses MongoDB as its database and JSON Web Tokens (JWT) for secure authentication mechanisms. Additionally, it provides email functionality using an SMTP service and integrates with Cloudinary for image storage and management.

## Key Features

- **User Authentication**: Secure user registration and login using JWT.
- **Database**: MongoDB is used to store user data securely.
- **Email Service**: SMTP is used to send emails for account verification and password recovery.
- **Image Management**: Cloudinary integration for storing and managing user profile images.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user information.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: For secure authentication.
- **SMTP**: Email service for account verification and password recovery.
- **Cloudinary**: Cloud service for image storage and management.

## Environment Variables

Ensure to configure the following environment variables in your `.env` file:

