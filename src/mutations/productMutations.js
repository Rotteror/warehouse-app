import { gql } from "@apollo/client";

const ADD_PRODUCT = gql`
  mutation addProduct($name: String!, $typeProduct: ProductStatus!, $unit: Number!) {
    addProduct(name: $name, typeProduct: $typeProduct, unit: $unit) {
      id
      name
      typeProduct
      unit
    }
  }
`;

export { ADD_PRODUCT };
