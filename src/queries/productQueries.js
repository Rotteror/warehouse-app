import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export { GET_PRODUCTS };
