const express = require("express");
const routes = require("./routes");
const cors = requires("cors");

app.users(cors());

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
