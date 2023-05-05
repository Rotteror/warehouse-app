import { gql } from "@apollo/client";

const ADD_WAREHOUSE = gql`
  mutation AddWarehouse(
    $name: String!
    $status: String!
    $size: number!
    $products: [Product!]!
    $history: [History!]!
  ) {
    AddWarehouse(
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

const UPDATE_WAREHOUSE = gql`
  mutation UpdateWarehouse(
    $name: String!
    $status: String!
    $size: number!
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
