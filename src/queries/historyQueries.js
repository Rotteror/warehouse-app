import { gql } from "@apollo/client";

const GET_ALL_HISTORY = gql`
  query getAllHistory {
    history {
      id
      history_type
      productId
      amount
      created_At
    }
  }
`;

const GET_SINGLE_RECORD = gql`
  query getSingleHistory($id: ID!) {
    history_by_id(id: $id) {
      id
      history_type
      productId {
        name
        type
        unit
      }
      amount
      created_At
    }
  }
`;

export { GET_ALL_HISTORY, GET_SINGLE_RECORD };
