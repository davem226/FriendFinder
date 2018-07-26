// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Connect with routing files
// var htmlRoutes = require("./app/routing/htmlRoutes.js");
// console.log(htmlRoutes);

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



//======================================================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});
//======================================================================================

//======================================================================================
// Display JSON of all friends
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// Post new data to friends JSON
app.post("/api/friends", function (req, res) {
    // Store input from user
    var newFriend = req.body;

    // Loop through friends array and determine best match
    var minDifference = 0;
    var bestFriend = "";
    var bestieImage = "";
    var difference = 0;
    for (i in friends) {
        for (j in friends[i].scores) {
            difference += Math.abs(parseInt(newFriend.scores[j])
                - parseInt(friends[i].scores[j]));
        }
        console.log(difference);
        console.log(i);

        if (i === 0) {
            // Default the first friend checked to the best friend
            minDifference = difference;

            // Store friend who has the minimum difference
            bestFriend = friends[i].name;
            bestieImage = friends[i].photo;
        }
        else if (difference < minDifference) {
            minDifference = difference;

            // Store friend who has the minimum difference
            bestFriend = friends[i].name;
            bestieImage = friends[i].photo;
        }
        console.log(minDifference);
        console.log(bestFriend);
        console.log(bestieImage);

        // Reset difference value for next friend
        difference = 0;
    }

    // Add new friend data to friends array
    friends.push(newFriend);

    res.json({
        output: "Here is your new best friend!",
        friend: bestFriend,
        image: bestieImage
    });
});
//======================================================================================


//======================================================================================
var friends = [
    {
        "name": "No-personality Pat",
        "photo": "http://www.dictionary.com/e/wp-content/uploads/2018/03/face-without-mouth.jpg",
        "scores": [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3
        ]
    }
];
//======================================================================================
