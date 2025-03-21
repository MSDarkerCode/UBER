# API Documentation

## POST /users/register

### Description
Registers a new user into the system. Validates required fields and creates a user. On a successful registration, returns a token and the user object.

### Request Body Requirements
- **fullname**: An object containing:
  - **firstname** (string, required, minimum 3 characters)
  - **lastname** (string, optional, minimum 3 characters)
- **email**: A valid email string, required.
- **password**: A string, required, minimum 6 characters.

### Status Codes
- **201 Created**: User registered successfully, returns token and user data.
- **400 Bad Request**: Validation errors due to missing or invalid fields.

### Example Request
```json
{
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Example Success Response (201)
```json
{
  "token": "jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password_here"
  }
}
```

### Example Error Response (400)
```json
{
  "errors": [
    { "msg": "Invalid email", "param": "email", "location": "body" },
    ...
  ]
}
```
