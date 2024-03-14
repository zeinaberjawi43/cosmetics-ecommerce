const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/config");
const path = require("path");

// Middleware
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
// Set 'views' as the folder containing your views
app.set("../backend/views", path.join(__dirname, "../backend/views"));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import user routes
const cartRoutes = require("./routes/cartRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const orderDetailRoutes = require("./routes/orderDetailRoutes");
const productRoutes = require("./routes/productRoutes");
const reviewsRoutes = require("./routes/reviewsRoutes");
const subTotalOrderRoutes = require("./routes/subTotalOrderRoutes");
const teamRoutes = require("./routes/teamRoutes");
const userRoutes = require("./routes/userRoutes");


// Set 'views' as the folder containing your views
app.set("views", path.join(__dirname, "views"));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Use user routes
app.use("/users", userRoutes);
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);
app.use("/orderDetail", orderDetailRoutes);
app.use("/reviews", reviewsRoutes);
app.use("/teammembers", teamRoutes);
app.use("/add_to_cart", cartRoutes);
app.use("/Total_Orders", subTotalOrderRoutes);

// Access environment variables
const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});

module.exports = app;