const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDatabase = () => {
  mongoose.connect("mongodb+srv://Himanshu:gokuss3@ecomerce.8m2cbk5.mongodb.net/Ecomerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
