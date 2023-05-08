import { gql } from "@apollo/client";

const ADD_RECORD = gql`
  mutation addRecord(
    $history_type: String!
    $productId: Product!
    $amount: Number!
    $created_At: String!
  ) {
    addRecord(
      history_type: $history_type
      productId: $productId
      amount: $amount
      created_At: $created_At
    ) {
      id
      history_type
      productId
      amount
      created_At
    }
  }
`;
// Variant two
const ADD_HISTORY = gql`
  mutation addHistory(
    $history_type: String!
    $productId: Product!
    $amount: Number!
    $created_At: String!
  ) {
    addRecord(
      history_type: $history_type
      productId: $productId
      amount: $amount
      created_At: $created_At
    ) {
      id
      history_type
      productId
      amount
      created_At
    }
  }
`;

export { ADD_RECORD, ADD_HISTORY };
