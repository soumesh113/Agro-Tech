const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
app.use(cors());

const JWT_SECRET = "vanshsoumeshnayanrohit@nitkurukshetra";
const mongoUrl =
  "mongodb+srv://12113097:vansh123@cluster0.uzaz3rq.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.use(express.json());
app.listen(5000, () => {
  console.log("server started");
});
require("./Schema/UserDetails");
require("./Schema/CropDetails");
require("./Schema/EquipmentDetails");
<<<<<<< HEAD
require("./Schema/Cart")
const User = mongoose.model("UserInfo");
const CropDetails = mongoose.model("CropDetails");
const EquipmentDetails = mongoose.model("EquipmentDetails");
const Cart = mongoose.model("Cart")
=======
const User = mongoose.model("UserInfo");
const CropDetails = mongoose.model("CropDetails");
const EquipmentDetails = mongoose.model("EquipmentDetails");
>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
// for Sign up
app.post("/sell_crop", async (req, res) => {
  const {
    enteredProductName,
    enteredQuantity,
    enteredUserAddress,
    enteredUserCity,
    enteredUserCountry,
    enteredUserPhoneNumber,
    enteredUserPostalCode,
    enteredUserState,
    enteredUsername,
  } = req.body;
  try {
    await CropDetails.create({
      username: enteredUsername,
      productName: enteredProductName,
      quatity: enteredQuantity,
      mobileNumber: enteredUserPhoneNumber,
      country: enteredUserCountry,
      address: enteredUserAddress,
      state: enteredUserState,
      city: enteredUserCity,
      postralCode: enteredUserPostalCode,
    });
    res.send({ status: "saved" });
  } catch (error) {
    res.send({ status: "something went wrong" });
  }
});
<<<<<<< HEAD
app.post("/order", async (req, res) => {
  const {
     username, address, items, totalAmount
  } = req.body;
  try {
    await Cart.create({
      Username: username,
      Total_Amount: totalAmount,
      Items: items,
      Address: address,
      Order_ID: new mongoose.Types.ObjectId()
    });
    res.send({ status: "saved" });
  } catch (error) {
    console.log(error)
    res.send({ status: "something went wrong" });
  }
});
=======
>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
app.post("/sell_equipment", async (req, res) => {
  const {
    username,
    equipmentname,
    enteredprice,
    entereddescription,
    enteredimage,
    quantity,
    user_Phone_number,
    user_country,
    user_state,
    user_address,
    user_city,
    user_postal_code,
  } = req.body;
  try {
    await EquipmentDetails.create({
      Username: username,
      Equipmentname: equipmentname,
      Price: enteredprice,
      Description: entereddescription,
      Image: enteredimage,
      Quantity: quantity,
      Phone_number: user_Phone_number,
      Country: user_country,
      State: user_state,
      Address: user_address,
      City: user_city,
      Postal_code: user_postal_code,
<<<<<<< HEAD
      // Category: 
=======
>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
    });
    res.send({ status: "saved" });
  } catch (error) {
    res.send({ status: "something went wrong" });
  }
});

app.post("/equipments", async (req, res) => {
  EquipmentDetails.find().then((equips) => {
    if (res.status(201)) {
      return res.json({ status: "ok", data: equips });
    } else {
      return res.json({ error: "error" });
    }
  });
  // .catch((err) => console.log(err));
});

<<<<<<< HEAD
app.post("/searchE", async (req, res) => {
const hint ="car";
EquipmentDetails.find({Equipmentname: {$regex: hint}}).then((equips) => {
    if (res.status(201)) {
      return res.json({ status: "ok", data: equips });
    } else {
      return res.json({ error: "error" });
    }
  });
});

app.post("/searchP", async (req, res) => {
  const pr=4;
  EquipmentDetails.find({Price:{$gt:pr}}).then((equips) => {
    if (res.status(201)) {
      return res.json({ status: "ok", data: equips });
    } else {
      return res.json({ error: "error" });
    }
  });
});

app.post("/registor", async (req, res) => {
  const { username, email, password,City,Country,mobilenumber,address } = req.body;
=======
app.post("/registor", async (req, res) => {
  const { username, email, password } = req.body;
>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ username });
    if (oldUser) {
      return res.json({ error: "User exists" });
    }
    await User.create({
      username,
      email,
      password: encryptedPassword,
<<<<<<< HEAD
      City,
      Country,
      mobilenumber,
      address
=======
>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
    });
    res.send({ status: "saved" });
  } catch (error) {
    res.send({ status: "something went wrong" });
  }
});

// for login
app.post("/login-user", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.json({ error: "user not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
<<<<<<< HEAD
    
    if (res.status(201)) {
      return res.json({ status: "ok", data: user });
=======
    const token = jwt.sign({ username: user.username }, JWT_SECRET);
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid password" });
});
