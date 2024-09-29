const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req,res) => {
    res.json({info: ["Age: 26", "Hight: 175" , "Date of birth: 29.09.98", "Gender: Male"]});
});

app.listen(8080, () => {
    console.log("server running 8080")
});