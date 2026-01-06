const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     console.log("Hi, I am 1st middleware");
//     return next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     return next();
// });

app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});

app.get("/", (req, res) => {
    res.send("Hi I am root");
});

app.get("/random", (req, res) => {
    res.send("This is a random response");
});

app.listen(8080, () => {
    console.log("Server Listening to port 8080");
});
