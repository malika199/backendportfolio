const Experience = require("../models/experience.model");
const Skill = require("../models/skill.model");
// const { GraphQLScalarType } = require('graphql');

const { ObjectID } = require("mongodb");

module.exports = {
  // Date: {
  //     parseValue: (value) => new Date(value),
  //     serialize: (value) => value.toISOString(),
  //     parseLiteral: (ast) => new Date(ast.value),
  //   },

  Query: {
    getExperiences: () => {
      return Experience.find();
    },
    getExperience(parent, args, context) {
      return Experience.findById(args.id);
    },
    getSkills: () => {
      return Skill.find();
    },
    getSkill(parent, args, context) {
      return Skill.findById(args.id);
    },
  },

  Mutation: {
    async createExperience(parent, args) {
      const newExperience = new Experience({
        datedebut: args.datedebut,
        datefin: args.datefin,
        title: args.title,
        description: args.description,
        link:args.link,
      });
      return newExperience.save();
    },
    async deleteExperience(parent, args, context) {
      const deletedExperience = await Experience.findOneAndDelete({
        _id: ObjectID(args.id),
      });
      return deletedExperience.value;
    },
    async updateExperience(parent, { id, input }, context) {
      const updateResult = await Experience.findOneAndUpdate(
        { _id: ObjectID(id) },
        { $set: input },
        { returnOriginal: false }
      );
      return updateResult.value;
    },
    async createSkill(parent, args) {
      const newSkill = new Skill({
        img: args.img,
        label: args.label,
        typesk: args.typesk
      });
      return newSkill.save();
    },
    async deleteSkill(parent, args, context) {
      const deletedSkill = await Skill.findOneAndDelete({
        _id: ObjectID(args.id),
      });
      return deletedSkill.value;
    },
    async updateSkill(parent, { id, input }, context) {
      const updateResult = await Skill.findOneAndUpdate(
        { _id: ObjectID(id) },
        { $set: input },
        { returnOriginal: false }
      );
      return updateResult.value;
    },
  },
};
