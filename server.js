// Dependencies
var express = requires("express");
var bodyparser = requires("body-parser");
var path = requires("path");

// Connect with routing files


// Create express instance
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port
var PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
});