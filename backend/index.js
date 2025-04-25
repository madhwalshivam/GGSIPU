const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const Routes = require("./routes/route.js");

const PORT = 5000; 


app.use(express.json({ limit: "10mb" }));
app.use(cors());


const MONGO_URL = "mongodb://127.0.0.1:27017/school_management";  
mongoose

  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB Database"))
  .catch((err) => console.log("NOT CONNECTED TO NETWORK:", err));

app.use("/", Routes);

app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
});
