const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const typeDefs = `
  type User {
    id: ID! @isUnique
    name: String!
    address: String!
  }

  type Query {
    users: [User]
  }
`;

/* Test data */
const users = [
  { id: 1, name: 'mary', address: '123 no way usa'},
  { id: 2, name: 'joanne', address: 'im on the west coast'},
  { id: 3, name: 'sally', address: 'mountain address'},
  { id: 4, name: 'ashley', address: 'im in DC!'},
];

const resolvers = {
  Query: {
    users: () => users,
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
