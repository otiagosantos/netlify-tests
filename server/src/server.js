const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Woork!!"
    });
});

app.listen(process.env.PORT, () => {
    console.log("Server start on " + process.env.PORT);
});
