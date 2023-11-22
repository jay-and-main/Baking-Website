const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 5001;

mongoose
  .connect("mongodb://127.0.0.1:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((err) => {
    console.log(err);
  });


const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true, required: true},
    password: String,
    confirmPassword: String,
});

const User = new mongoose.model('User', userSchema);

app.post("/register", async (req, res) => {
    console.log(req.body);
  
    const { username, email, password, confirmPassword } = req.body;
  
    try {
      const existingUser = await User.findOne({ email: email });
  
      if (existingUser) {
        res.send({ message: "This email id is already registered" });
      } else {
        const user = new User({
          username,
          email,
          password,
          confirmPassword,
        });
  
        await user.save();
        res.send({ message: "User registered successfully" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    }
  });

  app.post("/login", async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successful" });
        } else {
          res.send({ message: "Incorrect Password" });
        }
      } else {
        res.send({ message: "User does not exist" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    }
  });


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
