const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  img: String,
  label: String,
  typesk: String
});

module.exports = mongoose.model('skill', SkillSchema);