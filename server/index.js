const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");
const { Prisma } = require("prisma-binding");

const typeDefs = importSchema("schema.graphql");

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello, Wroclaw!";
    },
    getUser: (root, args, context, info) => {
      const { id } = args;
      return users[id];
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    return {
      prisma: new Prisma({
        typeDefs: "generated/prisma.graphql",
        endpoint: "https://eu1.prisma.sh/makar/prisma/dev"
      })
    };
  }
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
