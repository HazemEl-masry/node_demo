const express = require('express');
const app = express();
const port = 3000;

// this for to make the api depend on the body params
app.use(express.json());

// normal get request
app.get('/', (req, res) => res.send('Hello World!'));

app.get("/auth", (req, res) => res.send("Auth"));

app.get("/home", (req, res) => res.send("Home"));

app.get("/test", (req, res) => res.send("Test"));

// normal post request without body
app.post("/login", (req, res) => {
    res.send("Login");
})

// path params
app.get("/sumNumber/:number1/:number2", (req, res) => {
    // res.send("SumNumber");

    const num1 = req.params.number1;
    const num2 = req.params.number2;
    const total = Number(num1) + Number(num2); // add the 2 number and then cast to numbers because they are string

    res.send(`the numbers is: ${num1} / ${num2} \n the total is: ${total}`);
});
// body params
app.get("/sayHello", (req, res) => {

    console.log(req.body);
    res.send(`Hello: ${req.body.name} \n Your age is: ${req.body.age}`);
});

// query params
app.get("/city", (req, res) => {
    console.log(`the city is: ${req.query.city}`);
    res.send(`Your country is: ${req.query.city}`);
});

app.get("/loop", (req, res) => {
    let numbers = "";
    for (let i = 0; i <= 100; i++) {
        numbers += i + "-";
    }
    res.send(`the numbers is: ${numbers}`)
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));