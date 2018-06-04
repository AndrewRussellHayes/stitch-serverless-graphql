const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const typeDefs = `
  type Reading {
    id: ID! @isUnique
    user_id: ID!
    readingType: String!
    value: String!
  }

  type Query {
    readings: [Reading]
  }
`;

/* Test data */
const readings = [
    { id: 1, user_id: 1, readingType: 'BP', value: '120/80'},
    { id: 1, user_id: 1, readingType: 'Weight', value: '123'},
    { id: 2, user_id: 2, readingType: 'BP', value: '120/80'},
    { id: 2, user_id: 2, readingType: 'Weight', value: '123'},
    { id: 3, user_id: 3, readingType: 'BP', value: '120/80'},
    { id: 3, user_id: 3, readingType: 'Weight', value: '123'},
    { id: 4, user_id: 4, readingType: 'BP', value: '120/80'},
    { id: 4, user_id: 4, readingType: 'Weight', value: '123'},
];

const resolvers = {
  Query: {
    readings: () => readings,
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
