import { gql } from "@apollo/client";

const ADD_PRODUCT = gql`
  mutation addProduct($name: String!, $type: String!, $unit: Number!) {
    addProduct(name: $name, type: $type, unit: $unit) {
      id
      name
      type
      unit
    }
  }
`;

export { ADD_PRODUCT };
