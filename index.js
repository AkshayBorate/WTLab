var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var db = require("./database/db");

db();
console.log("Databse Connected");

var Schema = mongoose.Schema;

var delSchema = new Schema({
  orderId: Number,
  deliveryDate: Date,
  deliveryAddress: String,
  deliveryFee: Number,
});

var delModel = mongoose.model("deliveries", delSchema);

var app = express();
app.use(express.json());
app.use(cors());

app.get("/getdata/:id", async (req, res) => {
  try {
    var result = await delModel.find({ orderId: req.params.id });
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

app.post("/add", async (req, res) => {
  try {
    var result = delModel.create(req.body);
    // var ans = await result.save();
    res.send("Inserted");
  } catch (err) {
    res.send(err.message);
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    await delModel.updateOne({ orderId: req.params.id }, { $set: req.body });
    res.send(req.params.id + "Updated");
  } catch (err) {
    res.send(err.message);
  }
});
app.delete("/delete/:id", async (req, res) => {
  try {
    await delModel.deleteOne({ orderId: req.params.id });
    res.send(req.params.id + "deleted");
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(9000);
