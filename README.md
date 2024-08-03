

# Node.js Authentication Backend

This project is a Node.js backend service designed for user authentication, including secure registration, login, and password management. It uses MongoDB for data storage, JSON Web Tokens (JWT) for secure authentication, SMTP for email functionality, and integrates with Cloudinary for image management.

## Key Features

- **User Authentication**: Secure registration and login using JWT.
- **Database**: MongoDB for secure storage of user data.
- **Email Service**: SMTP integration for account verification and password recovery.
- **Image Management**: Cloudinary integration for profile image storage and management.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user information.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: For secure authentication.
- **SMTP**: Email service for account verification and password recovery.
- **Cloudinary**: Cloud service for image storage and management.

## Installation

1. **Clone the Repository**

   Clone the repository using Git:
   ```sh
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   ```

2. **Install Dependencies**

   Install the required Node.js packages:
   ```sh
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=your_port_number
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_password
   CLOUDINARY_URL=your_cloudinary_url
   ```

## Usage

1. **Start the Server**

   Run the server using:
   ```sh
   npm start
   ```

   The server will start on the port specified in your `.env` file.

2. **API Endpoints**

   - **POST /api/auth/register**: Register a new user.
   - **POST /api/auth/login**: Log in an existing user.
   - **POST /api/auth/forgot-password**: Request password reset email.
   - **PUT /api/auth/reset-password**: Reset password using a reset token.

## Folder Structure

- **`backend/`**: Contains the backend application code.
  - **`config/`**: Configuration files.
    - `database.js`: Database connection configuration.
  - **`controllers/`**: Controllers for handling requests.
    - `authController.js`: Authentication-related controller.
  - **`middlewares/`**: Custom middleware functions.
    - `auth.js`: Middleware for protecting routes.
    - `catchAsyncErrors.js`: Utility for handling asynchronous errors.
    - `error.js`: Error handling middleware.
  - **`models/`**: Mongoose models for MongoDB.
    - `user.js`: User model.
  - **`routes/`**: API route definitions.
    - `auth.js`: Authentication routes.
  - **`utils/`**: Utility functions.
    - `apiFeatures.js`: Utility for API features.
    - `errorHandler.js`: Error handling utility.
    - `jwtToken.js`: Utility for generating and verifying JWTs.
    - `sendEmail.js`: Utility for sending emails.

- **`app.js`**: Main application file.
- **`package.json`**: Project metadata and dependencies.
- **`server.js`**: Entry point for starting the server.
- **`README.md`**: Project documentation.

## Contributing

Contributions are welcome. Please follow the standard open-source guidelines for contributing.

## License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.

