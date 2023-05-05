import { useState } from "react";
import { FaList } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_WAREHOUSE,
  UPDATE_WAREHOUSE,
} from "../mutations/warehouseMutations";
import { GET_WAREHOUSE, GET_WAREHOUSES } from "../queries/warehouseQueries";
import { GET_PRODUCTS } from "../queries/productQueries";

export default function AddWarehouseModal() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [status, setStatus] = useState("Neutral");

  const [addProject] = useMutation(ADD_WAREHOUSE, {
    variables: { name, status, size },
    update(cache, { data: { addWarehouse } }) {
      const { warehouses } = cache.readQuery({ query: GET_WAREHOUSES });
      cache.writeQuery({
        query: GET_WAREHOUSES,
        data: { warehouses: [...warehouses, addWarehouse] },
      });
    },
  });

  // Get Clients for select
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  const onSubmit = (e) => {
    console.log(name, size, status, 'add warehouse')
    e.preventDefault();

    if (name === "" || size === "" || status === "") {
      return alert("Please fill in all fields");
    }

    addProject(name, size, status);

    setName("");
    setSize("");
    setStatus("Neutral");
  };

//   if (loading) return null;
//   if (error) return "Something Went Wrong";

  return (
    <>
      {/* {!loading && !error && ( */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addWarehouse"
        >
          <div className="d-flex align-items-center">
            {/* <FaList className="icon" /> */}
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
                      <option value="Non Hazards">Non Hazards</option>
                      <option value="Hazards">Hazards</option>
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
      {/* )} */}
    </>
  );
}
