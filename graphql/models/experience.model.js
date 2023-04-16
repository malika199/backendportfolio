const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  datedebut : Date,
  datefin : Date,
  title: String,
  description: String,
  link: String,

});

module.exports = mongoose.model('experience', ExperienceSchema);