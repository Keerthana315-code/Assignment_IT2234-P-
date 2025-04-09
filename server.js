const express = require('express');
const app = express();

// Correct usage of middleware
app.use((req, res, next) => {
    console.log('Middleware is working!');
    next();
});

// Example of a route handler
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(8080, () => {
    console.log('Server is running on port 3000');
});
