import { gql } from "@apollo/client";

const GET_WAREHOUSES = gql`
  query getWarehouses {
    warehouses {
      id
      name
      status
      size
      products {
        id
        typeProduct
        unit
      }
    }
  }
`;

const GET_WAREHOUSE = gql`
  query getWarehouse($id: ID!) {
    warehouse(id: $id) {
      id
      name
      status
      size
      products{
        id
      }
      history {
        id
      }
    }
  }
`;

export { GET_WAREHOUSES, GET_WAREHOUSE };
