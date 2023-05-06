import { gql } from "@apollo/client";

const ADD_WAREHOUSE = gql`
  mutation addWarehouse(
    $name: String!
    $status: String!
    $size: String!
  ) {
    addWarehouse(
      name: $name
      status: $status
      size: $size
    ) {
      id
      name
      status
      size
    }
  }
`;

const UPDATE_WAREHOUSE = gql`
  mutation updateWarehouse(
    $name: String!
    $status: String!
    $size: String!
    $products: [Product!]!
    $history: [History!]!
  ) {
    updateWarehouse(
      name: $name
      status: $status
      size: $size
      products: $products
      history: $history
    ) {
      id
      name
      status
      size
      products
      history {
        id
        history_type
        amount
        productId
        created_At
      }
    }
  }
`;

export { ADD_WAREHOUSE, UPDATE_WAREHOUSE };
