import { Link } from "react-router-dom";

export default function WarehouseCard({ warehouse }) {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="h5 card-title">{warehouse.name}</div>
            <Link className="btn btn-light" to={`/warehouse/${warehouse.id}`}>
              View
            </Link>
          </div>
          <p className="small">
            Status: <strong>{warehouse.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
