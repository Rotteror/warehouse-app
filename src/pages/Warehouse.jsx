import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import WarehouseInfo from "../components/WarehouseInfo";
import { useQuery } from "@apollo/client";
import { GET_WAREHOUSES, GET_WAREHOUSE } from "../queries/warehouseQueries";
import { warehouseData } from "../mockData";

export default function Warehouse() {
  // const { id } = useParams();
  // const { loading, error, data } = useQuery(GET, { variables: { id } });

  // if (loading) return <Spinner />;
  // if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {/* {!loading && !error && ( */}
      <div className="mx-auto w-75 card p-5">
        <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
          Back
        </Link>

        <h1>{warehouseData.name}</h1>
        <p>{warehouseData.size}</p>

        <h5 className="mt-3">Warehouse Status</h5>
        <p className="lead">{warehouseData.status}</p>

        <WarehouseInfo warehouse={warehouseData} />
      </div>
      {/* )} */}
    </>
  );
}
