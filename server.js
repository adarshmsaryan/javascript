var express=require("express");
var cors=require("cors");
var herolist = [{
    "sl": 1,
    "title": "Batman",
    "gender": "male",
    "firstname": "Bruce",
    "lastname": "Wayne",
    "city": "Gotham",
    "ticketprice": 123.45,
    "poster": "images/batman.jpg"
},
{
    "sl": 2,
    "title": "Superman",
    "gender": "male",
    "firstname": "Clark",
    "lastname": "Kent",
    "city": "Metropolis",
    "ticketprice": 178.67,
    "poster": "images/superman.jpg"
},
{
    "sl": 3,
    "title": "Ironman",
    "gender": "male",
    "firstname": "Tony",
    "lastname": "Stark",
    "city": "New York",
    "ticketprice": 122.90,
    "poster": "images/ironman.jpg"    
}, {
    "sl": 4,
    "title": "Phantom",
    "gender": "male",
    "firstname": "Kit",
    "lastname": "Walker",
    "city": "Bhangala",
    "ticketprice": 98.64,
    "poster": "images/phantom.jpg"
}, {
    "sl": 5,
    "title": "Spiderman",
    "gender": "male",
    "firstname": "Peter",
    "lastname": "Parker",
    "city": "New York",
    "ticketprice": 451.34,
    "poster": "images/spiderman.jpg"
},
{
    "sl": 6,
    "title": "Wonder Women",
    "gender": "female",
    "firstname": "Princess",
    "lastname": "Diana",
    "city": "Amazon",
    "ticketprice": 341.34,
    "poster": "images/wonderwoman.png"
}];
var app=express();
app.get("/data", function(req,res){
    res.send(herolist)
});
app.listen(2020,"localhost",function(err){
    if(err){
        console.log(err +":happend")
    }
    else{
        console.log("server is now live on localhost")
    }
})
