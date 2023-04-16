const { ApolloServer } = require("apollo-server-express");
const express = require('express');
const config = require("../graphql/configs");
const cors = require("cors");

const port = config.server.port;

const typeDefs =  require('../graphql/shemas/experience.shema');

const resolvers = require('../graphql/resolvers/experience.resolver');

const app = express();


  app.use(cors());
   

exports.start = async () => {
  
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
    app.listen(port, (err) => {
      if (err) {
        console.log(`Errors: ${err}`);
        process.exit(-1);
      }
      console.log(`🚀 Server ready ${port}`);
    });
  };
  