const express = require("express");
const corse = require("cors");
const http = require("http");
const Routes = require("./routes/index");
const bodyParser = require("body-parser");
const session = require("express-session");

const { connectDB } = require("./Database_connection/Database");

const PORT = 4000;
const database = "socketDB";

const app = express();
connectDB(database);

//middlewares
app.use(corse());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ saveUninitialized: false, resave: false, secret: "secret" }));

app.use(Routes);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server is live on http://localhost:${PORT}`);
})