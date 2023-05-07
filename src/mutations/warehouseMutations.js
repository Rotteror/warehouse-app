import { gql } from "@apollo/client";

const ADD_WAREHOUSE = gql`
  mutation addWarehouse($name: String!, $status: String!, $size: String!) {
    addWarehouse(name: $name, status: $status, size: $size) {
      id
      name
      status
      size
    }
  }
`;

const UPDATE_WAREHOUSE = gql`
  mutation updateWarehouse(
    $id: ID!
    $productId: ID!
    $name: String!
    $typeProduct: String!
    $unit: String!
  ) {
    updateWarehouse(
      id: $id
      productId: $productId
      name: $name
      typeProduct: $typeProduct
      unit: $unit
    ) {
      id
    }
  }
`;

export { ADD_WAREHOUSE, UPDATE_WAREHOUSE };
