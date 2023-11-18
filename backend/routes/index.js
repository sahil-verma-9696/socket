const express = require("express");
const { Registration, Login, Logout } = require("../Controlers/userController");


const Routes = express();

Routes.get("/", (req, res) => { res.send("i am home route") });

Routes.post("/registration", Registration);
Routes.post("/login", Login);
Routes.post("/logout", Logout);


module.exports = Routes;