import { useQuery } from "@apollo/client";

import WarehouseCard from "./WarehouseCard";
import Spinner from "./Spinner";

import { GET_WAREHOUSES } from "../queries/warehouseQueries";
import { warehouseData } from "../mockData";
export default function Warehouses() {
  // const { loading, error, data } = useQuery(GET_WREHOUSES);

  // if (loading) return <Spinner />;
  // if (error) return <p>Something went wrong...</p>;
  const warehouses = [
    {
      name: "New England",
      status: "Non Hazards",
      size: 25,
      products: [
        {
          name: "Patatoes2",
          type: "Non Hazard",
          unit: 5,
        },
      ],
      history: [
        {
          history_type: "Import",
          productId: "testId",
          amount: 2,
          created_At: "2023-03-21",
        },
      ],
    },
  ];
  return (
    <>
      {warehouses.length > 0 ? (
        <div className="row">
          {warehouseData.map((warehouse) => (
            <WarehouseCard key={warehouse.id} warehouse={warehouse} />
          ))}
        </div>
      ) : (
        <p>No projects</p>
      )}
    </>
  );
}
