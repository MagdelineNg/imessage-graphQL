import { gql } from "apollo-server-core";

const typeDefs = gql`
  type User {
    id: String
    username: String
  }

  #query is for reading DB
  type Query {
    searchUsers(username: String): [User]
  }

  #Create, Update, Delete in DB
  type Mutation {
    createUsername(username: String): CreateUsernameResponse
  }

  #custom return type
  type CreateUsernameResponse {
    success: Boolean
    error: String
  }
`;

export default typeDefs;
