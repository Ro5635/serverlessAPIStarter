/**
 * GraphQL Schema
 *
 */

const {buildSchema} = require('graphql');

// Construct a schema, using GraphQL schema language
exports.authenticatedSchema = buildSchema(`


  type Query {
    getName(id: String!): String
  }
  
 

`);


module.exports = exports;