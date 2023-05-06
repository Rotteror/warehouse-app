import { gql } from "@apollo/client";

const ADD_PRODUCT = gql`
  mutation addProduct($name: String!, $typeProduct: String!, $unit: String!) {
    addProduct(name: $name, typeProduct: $typeProduct, unit: $unit) {
      id
      name
      typeProduct
      unit
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: ID!
    $name: String!
    $typeProduct: String!
    $unit: String!
  ) {
    updateProduct( id: $id ,name: $name, typeProduct: $typeProduct, unit: $unit) {
      id
      name
      typeProduct
      unit
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

export { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT };
