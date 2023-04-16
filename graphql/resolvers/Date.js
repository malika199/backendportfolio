const { GraphQLScalarType, kind } = require('graphql');

module.exports = {
    Date: new GraphQLScalarType ({
        name:'Date',
        description: 'Date saclar type',
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value),
        serialize: (value) => value.toISOString(),
      }),

    }