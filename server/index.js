const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  input UserInput {
    id: ID!
    name: String
  }

  type Mutation {
    createUser(data: UserInput): User
  }

  type Query {
    helloWorld: String!
    getUser(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
  }

  type Message {
    id: ID!
    body: String!
    author: User!
  }

  type Chat {
    id: ID!
    messages: [Message!]!
  }
`;

const users = {
  id1: {
    id: "id1",
    name: "Josh"
  },
  id2: {
    id: "id2",
    name: "Fred"
  }
};

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
  resolvers
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
