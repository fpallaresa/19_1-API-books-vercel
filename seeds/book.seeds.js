const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { bookSeed } = require("./book.seeds.aux.js");

const seed = async () => {
  try {
    await connect();
    console.log("tenemos conexión");
    await bookSeed();
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
  }
};

seed();
