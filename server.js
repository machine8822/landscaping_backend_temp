const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

let houses = [
    {
        "_id": "1",
        "name": "Mulch",
        "description": "Useful for keep the soil a good temperature and to prevent weeds from growing.",
        "price": "3.99",
        "rating": "4.2",
        "img1": "https://machine8822.github.io/project/part6/images/mulch.png",
        "img2": "https://machine8822.github.io/project/part6/images/placeholder.jpg"
    },
    {
        "_id": "2",
        "name": "Pine Straw",
        "description": "Useful for fertilizing grass.",
        "price": "4.99",
        "rating": "3.4",
        "img1": "https://machine8822.github.io/project/part6/images/straw.png",
        "img2": "https://machine8822.github.io/project/part6/images/placeholder.jpg"
    },
    {
        "_id": "3",
        "name": "Pine Tree",
        "description": "Tall, bushy tree. Commonly used as Christmas trees.",
        "price": "32.99",
        "rating": "4.4",
        "img1": "https://machine8822.github.io/project/part6/images/tree.png",
        "img2": "https://machine8822.github.io/project/part6/images/placeholder.jpg"
    },
    {
        "_id": "4",
        "name": "Flowers",
        "description": "Roses are our speciality, especially around this time.",
        "price": "6.99",
        "rating": "3.3",
        "img1": "https://machine8822.github.io/project/part6/images/flower.jpg",
        "img2": "https://machine8822.github.io/project/part6/images/placeholder.jpg"
    }
    
];

app.get("/api/houses", (req, res)=>{
    res.send(houses);
});

app.listen(3001, ()=>{
    console.log("I'm listening");
});

