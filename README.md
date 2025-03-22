# API Documentation

## POST /users/register

### Description
Registers a new user into the system. Validates required fields and creates a user. On a successful registration, returns a token and the user object.

### HTTP Method

`POST`

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

## POST /users/login

### Description
Authenticates a user by validating credentials. On success, returns a token and user data.

### HTTP Method
`POST`

### Request Body Requirements
- **email**: A valid email string, required.
- **password**: A string, required, minimum 6 characters.

### Status Codes
- **200 OK**: Authentication successful, returns token and user data.
- **400 Bad Request**: Validation errors due to missing or invalid fields.
- **401 Unauthorized**: Incorrect email or password.

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Example Success Response (200)
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

### Example Error Response (400 or 401)
```json
{
  "errors": [
    { "msg": "Invalid email", "param": "email", "location": "body" }
    // ...other errors...
  ]
}
```

## GET /users/profile

### Description
Retrieves the authenticated user's profile. Requires valid authentication token.

### HTTP Method
`GET`

### Authentication
- Requires a valid token in cookies or authorization header.

### Status Codes
- **200 OK**: Returns user profile information.
- **401 Unauthorized**: No token provided or token is invalid/expired.

### Example Success Response (200)
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
  // ...other user fields...
}
```

## GET /users/logout

### Description
Logs out the user by clearing the token cookie and blacklisting the token.

### HTTP Method
`GET`

### Authentication
- Requires a valid token in cookies or authorization header.

### Status Codes
- **200 OK**: Logout successful.
- **401 Unauthorized**: No valid token provided.

### Example Success Response (200)
```json
{
  "message": "Logged out"
}
```

## POST /captains/register

### Description
Registers a new captain. Validates required fields including vehicle details and creates a captain. Returns the created captain details on success.

### HTTP Method
`POST`

### Request Body Requirements
- **fullname**: An object containing:
  - **firstname** (string, required, minimum 3 characters)
  - **lastname** (string, optional)
- **email**: A valid email string, required.
- **password**: A string, required, minimum 6 characters.
- **vehicle**: An object containing:
  - **color** (string, required, minimum 3 characters)
  - **plate** (string, required, minimum 3 characters)
  - **capacity** (string, required, minimum 1 character)
  - **vehicleType** (string, required, must be one of ['car', 'motorcycle', 'auto']).

### Status Codes
- **201 Created**: Captain registered successfully.
- **400 Bad Request**: Validation errors due to missing or invalid fields.

### Example Request
```json
{
  "fullname": { "firstname": "Alice", "lastname": "Smith" },
  "email": "alice.smith@example.com",
  "password": "captainpassword",
  "vehicle": {
    "color": "Blue",
    "plate": "XYZ123",
    "capacity": "4",
    "vehicleType": "car"
  }
}
```

### Example Success Response (201)
```json
{
  "token": "jwt_token_here",
  "captain": {
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "password": "hashed_password_here",
    "vehicle": {
      "color": "Blue",
      "plate": "XYZ123",
      "capacity": "4",
      "vehicleType": "car"
    }
  }
}
```

### Example Error Response (400)
```json
{
  "errors": [
    { "msg": "Invalid email", "param": "email", "location": "body" }
    // ...other errors...
  ]
}
```
