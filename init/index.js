const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mongoUrl = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("db working");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "653d23cd5fa24438117e360a",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
