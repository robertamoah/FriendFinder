var express = require("express");

var path = require("path");

var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT|| 3000;


app.use(express.urlencoded({extended: true }));
app.use(express.json());




require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log(`App Listening on PORT http://localhost:` +  PORT);
});






