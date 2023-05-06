import { Link, useParams } from "react-router-dom";
import { Spinner, WarehouseInfo } from "../components/index";

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

        <div className="d-flex">
          <div className="p-2 flex-grow-1">
            <h5>Warehouse Status</h5>
          </div>
          <div className="p-2">
            <button type="button" className="btn btn-primary btn-sm">
              Import
            </button>
          </div>
          <div className="p-2">
            <button type="button" className="btn btn-primary btn-sm">
              Export
            </button>
          </div>
        </div>

        <p className="lead">{warehouseData[0].status}</p>
        {warehouseData[0].status === "Hazard" && (
          <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Attention</h4>
            <p>
              This warehouse contains hazard items so you can import only hazard
              items - 'products'
            </p>

            <p class="mb-0">
              In order to change Warehouse status you will have to export all
              hazard items and replace them with non-hazardous.
            </p>
          </div>
        )}
        <WarehouseInfo warehouse={warehouseData} />
      </div>
      {/* )} */}
    </>
  );
}
