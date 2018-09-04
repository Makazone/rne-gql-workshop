const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello, Wroclaw!";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
