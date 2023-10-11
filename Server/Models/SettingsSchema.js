const mongoose = require("mongoose");

const company = new mongoose.Schema({
  userid: String,
  companyName: String,
  companyEmail: String,
  companyLogo: String,
  companyAddress: String,
  companyPhoneNumber: Number,
  companyWhatsapp: Number,
});
module.exports = new mongoose.model("companies", company);
