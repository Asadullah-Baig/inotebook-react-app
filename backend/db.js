const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://asad:asad123@cluster0.2cwuq.mongodb.net/inotebook?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to Mongo Successfully!");
  });
};

module.exports = connectToMongo;
