import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Query {
        hi: String
        goodbye: Integer
    }
`;
const resolvers = {
  Query: {
    hi() {
      return 'hello';
    },
    goodbye() {
      return 'bye';
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
