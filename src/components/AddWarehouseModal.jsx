import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_WAREHOUSE } from "../mutations/warehouseMutations";
import { GET_WAREHOUSES } from "../queries/warehouseQueries";

export default function AddWarehouseModal() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [status, setStatus] = useState("Neutral");

  const [addWarehouse] = useMutation(ADD_WAREHOUSE, {
    variables: { name, status, size },
    update(cache, { data: { addWarehouse } }) {
      const { warehouses } = cache.readQuery({ query: GET_WAREHOUSES });
      cache.writeQuery({
        query: GET_WAREHOUSES,
        data: { warehouses: [...warehouses, addWarehouse] },
      });
    },
  });

  // Get product for selected warehouse
  // const { loading, error, data } = useQuery(GET_PRODUCTS);

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || size === "" || status === "") {
      return alert("Please fill in all fields");
    }

    addWarehouse(name, status, size);

    setName("");
    setSize("");
    setStatus("Neutral");
  };

  // if (loading) return <Spinner />;
  //   if (error) return "Something Went Wrong";

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addWarehouse"
      >
        <div className="d-flex align-items-center">
          <div>Create Warehouse</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addWarehouse"
        aria-labelledby="addWarehouseLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addWarehouseLabel">
                New Warehouse
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Size</label>
                  <input
                    type="text"
                    className="form-control"
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    id="status"
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Non Hazard">Non Hazards</option>
                    <option value="Hazard">Hazard</option>
                    <option value="Neutral">Neutral</option>
                  </select>
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
