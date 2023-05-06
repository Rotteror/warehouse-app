import { gql } from "@apollo/client";

const GET_WAREHOUSES = gql`
  query getWarehouses {
    warehouses {
      id
      name
      status
      size
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
        history_type
        amount
        productId {
          id
        }
        created_At
      }
    }
  }
`;

export { GET_WAREHOUSES, GET_WAREHOUSE };
