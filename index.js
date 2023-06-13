const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/UserRoute');
const UserController = require('./controller/UserController');
const router = require('./routes/UserRoute');

mongoose.connect("mongodb+srv://isaom:Mammadli10@cluster0.xal9hhj.mongodb.net/task", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.log("Error connecting to MongoDB:", err);
});

app.use(express.json());
app.use("/api/users", router);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
