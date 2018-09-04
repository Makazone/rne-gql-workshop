const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");
const { Prisma } = require("prisma-binding");

const typeDefs = importSchema("schema.graphql");

// Provide resolver functions for your schema fields
const resolvers = {
  Query: { _: () => "none " },
  Mutation: {
    postMessage: async (_, args, context, info) => {
      const { body, chatId } = args;
      const { prisma } = context;

      const result = await prisma.mutation.createMessage(
        {
          data: {
            body,
            author: {
              connect: {
                id: "cjlnsxyrb5rw00b72k07xfiiy"
              }
            },
            chat: {
              connect: {
                id: chatId
              }
            }
          }
        },
        info
      );

      console.log(result);

      return result;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    return {
      prisma: new Prisma({
        typeDefs: "./generated/prisma.graphql",
        endpoint: "https://eu1.prisma.sh/makar/prisma/dev"
      })
    };
  }
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
