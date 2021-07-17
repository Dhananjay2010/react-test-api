let express = require("express");

let data=require("./data.json");

let server=express(); // Instance creation

server.get("/danimals", function(req, res){
    res.json(data);
});

server.get("/animal", function(req, res){

    let AllAnimals=data.map(function(e){
        return e.animal;
    });

    let uniqueAnimals=[...new Set(AllAnimals)];

    res.json(uniqueAnimals);  
})

server.get("/breed", function(req, res){

    let Allbreed=data.map(function(e){
        return e.breed;
    });

    let uniquebreeds=[...new Set(Allbreed)];

    res.json(uniquebreeds);  
})



server.listen(4500);