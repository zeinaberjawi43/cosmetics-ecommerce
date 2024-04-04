const mongoose = require("mongoose");
require("dotenv").config(); // Uncomment this line if you're using environment variables

const URI = process.env.MONGODB_URI;
// const URI = 'mongodb+srv://soozanbijo:1234@cluster0.nqdpqgb.mongodb.net/ecommerce'

// Connect to MongoDB Atlas
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

console.log("HELLO", URI);

// Uncomment the following lines for error and open event listeners
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log(Connected to MongoDB Atlas - Database: ${databaseName});
// });

module.exports = mongoose;