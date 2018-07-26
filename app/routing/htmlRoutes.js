// HTML Routes
var htmlRoutes = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });
}

// Export to make readable by server.js
module.exports(htmlRoutes);