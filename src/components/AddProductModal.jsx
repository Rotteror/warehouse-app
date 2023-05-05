import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../mutations/productMutations";
import { GET_PRODUCTS } from "../queries/productQueries";

export default function AddProductModal() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [unit, setUnit] = useState("");

  const [addProduct] = useMutation(ADD_PRODUCT, {
    variables: { name, type, unit },
    update(cache, { data: { addProduct } }) {
      const { products } = cache.readQuery({
        query: GET_PRODUCTS,
      });
      cache.writeQuery({
        query: GET_PRODUCTS,
        data: { products: [...products, addProduct] },
      });
    },
  });

  const onSubmit = (e) => {
    console.log(name, type, unit, "add product");
    e.preventDefault();
    if (name === "" || type === "" || unit === "") {
      return alert("Please fill in all fields");
    }

    // add to DB
    addProduct(name, type, unit);
    // clear local state
    setName("");
    setType("");
    setUnit("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Product
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Product
              </h1>
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
                  <label className="form-label">Type</label>
                  <select
                    id="type"
                    className="form-select"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="Non Hazards">Non Hazards</option>
                    <option value="Hazards">Hazards</option>
                  </select>
                  <label className="form-label">Units</label>
                  <input
                    type="unit"
                    className="form-control"
                    id="unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
