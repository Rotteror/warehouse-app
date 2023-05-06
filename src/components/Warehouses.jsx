import { useQuery } from "@apollo/client";

import WarehouseCard from "./WarehouseCard";
import Spinner from "./Spinner";

import { GET_WAREHOUSES } from "../queries/warehouseQueries";

export default function Warehouses() {

  const { loading, error, data } = useQuery(GET_WAREHOUSES);

  
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong...</p>;
  
  return (
    <>
      {data.warehouses.length > 0 ? (
        <div className="row">
          {data.warehouses.map((warehouse) => (
            <WarehouseCard key={warehouse.id} warehouse={warehouse} />
          ))}
        </div>
      ) : (
        <p>No projects</p>
      )}
    </>
  );
}
