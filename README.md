# express-resmaker

This package offers a set of convenient and easy-to-use utility functions for building simple and consistent API responses in Express applications. These utilities can help developers avoid repetitive coding tasks when creating response payloads, and ensure that responses are formatted consistently across different parts of the application.

## Getting Started

To install `npm i express-resmaker` and can be `require` or `import` from your Node.JS application.

```
// CommonJS
const resmaker = require("express-resmaker").default;
```

```
// ES6
import resmaker from "express-resmaker";
```

## API

The module provides a middleware function that can be used in your application. The middleware appends the following functions to the 'response' (or 'res') parameter that is passed to your routes:

.success(data, status, message)

- data: The required data must be either a string, object, array, or null.
- status: The optional HTTP code must be either a number or a string. (Default - 200)
- message: The optional message must be a string or an array of strings. (Default - OK)

.failed(error, status, message)

- error: The required error must be either a string, object, array, or null.
- status: The optional HTTP code must be either a number or a string. (Default - 400)
- message: The optional message must be a string or an array of strings. (Default - Bad Request)

The remaining utility methods have been implemented as outlined in the table below.

| Method            | Param | HTTP Status Code |
| ----------------- | ----- | ---------------- |
| created           | data  | 201              |
| noContent         | data  | 204              |
| unauthorized      | error | 401              |
| forbidden         | error | 403              |
| notFound          | error | 404              |
| notAllowed        | error | 405              |
| notAcceptable     | error | 406              |
| unauthorizedProxy | error | 407              |
| requestTimeout    | error | 408              |
| conflict          | error | 409              |
| invalid           | error | 422              |
| serverError       | error | 500              |
| notImplemented    | error | 501              |
| badGateway        | error | 502              |
| unavailable       | error | 503              |
| gatewayTimeout    | error | 504              |
| notSupported      | error | 505              |

## Examples

You can easily attach the middleware function to your Express object or an Express route. The following property is the one you'll frequently use:

```js
const express = require('express');
const resmaker = require('express-resmaker').default;

const app = express();

// use the middleware
app.use(resmaker);

app.get('/hello', function (req, res) {
  res.success('You are welcome!');
});

app.post('/check-in', function (req, res) {
  res.failed('Can not verify you!');
});
```

```ts
import express, { Application } from 'express';
import resmaker from 'express-resmaker';

const app: Application = express();

// use the middleware
app.use(<any>resmaker);

app.get('/hello', function (req: Request, res: Response | any) {
  res.success('You are welcome!');
});

app.post('/check-in', function (req: Request, res: Response | any) {
  res.failed('Can not verify you!');
});
```

```bash
// Success response
{

    "status": "200",
    "message": "OK",
    "description": "indicates that the request has succeeded.",
    "data": "You are welcome!"
}

// Failed response
{

    "status": "400",
    "message": "Bad Request",
    "description": "indicates that the server cannot or will not process ...",
    "error": "Can not verify you!",
}
```

## Contribution

If you have ideas for new features or notice any bugs that you can fix, please visit our GitHub repository to suggest changes and create pull requests. Thank you in advance for your contributions!
