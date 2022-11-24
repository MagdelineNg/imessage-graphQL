import { gql } from "@apollo/client";

const UserOperations = {
  Queries: {},
  Mutations: {
    createUsername: gql`
      mutation createUsername($username: String!) {
        #only graphql knows username is String type
        createUsername(username: $username) {
          success
          error
        }
      }
    `,
  },
  Subscriptions: {},
};

export default UserOperations;
