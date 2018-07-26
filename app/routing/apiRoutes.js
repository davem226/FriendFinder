// Import friends data
var friendData = require("../data/friends.js");
var friends = friendData.friends;

// Display JSON of all friends
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// Post new data to friends JSON
app.post("/api/friends", function (req, res) {
    // Store input from user
    var newFriend = req.body;

    // Loop through friends array and determine best match
    var minDifference;
    var bestFriend = "";
    var bestieImage = "";
    var difference = 0;
    for (i in friends) {
        for (j in friends[i].scores) {
            difference += Math.abs(parseInt(newFriend.scores[j])
                - parseInt(friends[i].scores[j]));
        }

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