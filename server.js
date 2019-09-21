var express = require("express");

var app = express();

var PORT = process.env.PORT|| 300;

app.use(express.urlencoded({extended: true }));

app.use(express.json());

app.listen(PORT, function(){
    console.log("App Listening on PORT " + PORT);
});






