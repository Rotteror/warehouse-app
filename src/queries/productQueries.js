import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      typeProduct
    }
  }
`;

export { GET_PRODUCTS };
