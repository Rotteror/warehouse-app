import { Link, useParams } from "react-router-dom";
import {
  Spinner,
  WarehouseInfo,
  ImportModal,
  ExportModal,
} from "../components/index";
// import {ImportModal} from '../components/ImportModal'
import { useQuery } from "@apollo/client";
import { GET_WAREHOUSE } from "../queries/warehouseQueries";

export default function Warehouse() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_WAREHOUSE, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>

          <h1>{data.warehouse.name}</h1>

          <div className="d-flex">
            <div className="p-2 flex-grow-1">
              <h5>Warehouse Status</h5>
            </div>
            <div className="p-2">
              <ImportModal />
            </div>
            <div className="p-2">
              <ExportModal />
            </div>
          </div>

          <p className="lead">{data.warehouse.status}</p>
          {data.warehouse.status === "Hazard" && (
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Attention</h4>
              <p>
                This warehouse contains hazard items so you can import only
                hazard items - 'products'
              </p>

              <p className="mb-0">
                In order to change Warehouse status you will have to export all
                hazard items and replace them with non-hazardous.
              </p>
            </div>
          )}
          <WarehouseInfo warehouse={data.warehouse} />
        </div>
      )}
    </>
  );
}
