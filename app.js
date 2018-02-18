const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    request("https://talaikis.com/api/quotes/", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const quoteData = JSON.parse(body);
            res.render("quote-machine", {quoteData: quoteData});
        }

    });
});

app.listen(3000, (req, res) => console.log("The quote machine server has started!"));