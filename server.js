const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/config");
const path = require("path");

//email register
const appRoute = require('./routes/route');

//email forgetpassword 
const mongoose = require("mongoose");
app.use(cors());
const bcrypt = require("bcrypt");

a

const jwt = require("jsonwebtoken");
app.set("view enginer", "ejs");
app.use(express.urlencoded({ extended: false }));

const JWT_SECRET = " ";

const mongoUrl = " ";

mongoose 
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

  require("./models/user");
  require("./models/admin");
  // const User = mongoose.model("UserInfo");
  app.post("/register", async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
      const oldUser = await User.findOne({ email });

      if (oldUser){
        return res.json({ error: "User Exists"});
      }
      await User.create({
        firstname,
        lastname,
        email,
        password: encryptedPassword,
      });
      res.send({ status: "ok "});
    } catch (error){
      res.send({ status: "error "});
    }
  })

  app.post("/login-user", async (req, res) =>{
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)){
      const token = jwt.sign({ email: user.email }, JWT_SECRET);

      if (res.status(201)) {
        return res.json ({ status: "ok", data: token });
      } else {
        return res.json({ error: "error"});
      }
    }
    res.json({ status: "error", error: "Invalid Password" });
  });

  app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try{
      const user = jwt.verify(token, JWT_SECRET);
      console.log(user);

      const useremail = useremail;
      User.findOne({ email: useremail })
       .then((data) => {
          res.send({ status: "ok", data: data });
       })
       .catch((error) => {
        res.send({ status: "error", data: error });
       });
      } catch (error) { }
  });

app.post("/forget-password",async(req,res)=>{
  const{email}=req.body;
  try {
     const oldUser = await User.findOne({ email });
     if(!oldUser) {
      return res.send("User Not Exists!");
     }
  const secret = JWT_SECRET + oldUser.password;
  const token = jwt.sign({ email: oldUser.email, id: oldUser._id},secret, { expiresIn: '5m',});
  const link = 'http://localhost:4000/reset-password/$(oldUser._}/$[token}';
  console.log(link);
  } catch (error) { }
});

app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if(!oldUser){
    return res.json({ status: "User Not Exists!"});
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", {email:verify,email})
    res.send("Verified");
  } catch (error) {
    console.log(error);
    res.send("Not verified")
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if(!oldUser){
    return res.json({ status: "User Not Exists!"});
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.UpdateOne (
    {_id: id,
    },
    {
      $set: {
        password: encryptedPassword,
      },
    }
    );

    res.json({ status: "Password Update" });
    res.render("index", {email:verify,email})
    res.send("Verified");
  } catch (error) {
    console.log(error);
    res.json({ status: " Semothing Went Wrong"});
  }
});
// admin email
app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try{
    const oldAdmin = await Admin.findOne({ email });

    if (oldAdmin){
      return res.json({ error: "Admin Exists"});
    }
    await Admin.create({
      firstname,
      lastname,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok "});
  } catch (error){
    res.send({ status: "error "});
  }
})

app.post("/login-admin", async (req, res) =>{
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) {
    return res.json({ error: "Admin Not found" });
  }
  if (await bcrypt.compare(password, admin.password)){
    const token = jwt.sign({ email: admin.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json ({ status: "ok", data: token });
    } else {
      return res.json({ error: "error"});
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

app.post("/adminData", async (req, res) => {
  const { token } = req.body;
  try{
    const admin = jwt.verify(token, JWT_SECRET);
    console.log(admin);

    const adminemail = adminemail;
    User.findOne({ email: adminemail })
     .then((data) => {
        res.send({ status: "ok", data: data });
     })
     .catch((error) => {
      res.send({ status: "error", data: error });
     });
    } catch (error) { }
});
app.post("/forget-password",async(req,res)=>{
  const{email}=req.body;
  try {
     const oldAdmin = await Admin.findOne({ email });
     if(!oldAdmin) {
      return res.send("Admin Not Exists!");
     }
  const secret = JWT_SECRET + oldAdmin.password;
  const token = jwt.sign({ email: oldAdmin.email, id: oldAdmin._id},secret, { expiresIn: '5m',});
  const link = 'http://localhost:4000/reset-password/$(oldUser._}/$[token}';
  console.log(link);
  } catch (error) { }
});

// send to sms

// const twilio = require('twilio');
// const dotenv = require('dotenv');
// dotenv.config();

// function sendSMS(){
//     const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

//     return client.messages
//     .create({body: 'Hey this is a message', from:'+96176749252', to: process.env.PHONE_NUMBER})
//     .then(message => {

//         console.log(message, "Message send")

//       })
//     .catch(err => { 

//       console.log(err, "Mesaage NOT send")

//     })
// }

// sendSMS()

/** subscribe  */
app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  // Here you would handle the subscription, for demonstration purposes, we'll just log the email
  console.log(`Subscribing with email: ${email}`);
  res.status(200).send('Subscription successful');
});

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
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const orderDetailRoutes = require("./routes/orderDetailRoutes");
const reviewsRoutes = require("./routes/reviewsRoutes");
const teamRoutes = require("./routes/teamRoutes");
const cartRoutes = require("./routes/cartRoutes");
const subTotalOrderRoutes = require("./routes/subTotalOrderRoutes");
const adminRoutes = require("./routes/adminRoutes");


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
app.use("/admin", adminRoutes);
// email
app.use('./api', appRoute);

// Access environment variables
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port ${PORT}");
});

module.exports = app;