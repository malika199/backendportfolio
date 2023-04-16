const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type Experience {
    id: ID
    datedebut: Date
    datefin: Date
    title: String
    description: String
    link:String
  }
  type Query {
    getExperiences: [Experience]
    getExperience(id: ID): Experience!
  }
  input ExperienceInput {
    datedebut: Date
    datefin: Date
    title: String
    description: String
    link:String
  }
  type Mutation {
    createExperience(
      title: String
      description: String
      link:String
      datedebut: Date
      datefin: Date
    ): Experience
    updateExperience(id: ID, input: ExperienceInput): Experience
    deleteExperience(id: ID!): String
  }
  type Skill {
    id: ID
    img: String
    label: String
    typesk: String

  }
  type Query {
    getSkills: [Skill]
    getSkill(id: ID): Skill!
  }
  input SkillInput {
    img: String
    label: String
    typesk:String

  }
  type Mutation {
    createSkill(img: String label: String typesk: String): Skill
    updateSkill(id: ID!, input: SkillInput!): Skill
    deleteSkill(id: ID!): String
  }
`;
module.exports = typeDefs;
