import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { GET_WAREHOUSE } from "../queries/warehouseQueries";
import { GET_PRODUCTS } from "../queries/productQueries";
import { UPDATE_PRODUCT, DELETE_PRODUCT } from "../mutations/productMutations";

export default function ImportProductRow({ product }) {
  const [amountToBeImported, setAmountToBeImported] = useState(1);
  const [leftAmount, setLeftAmount] = useState(product.unit);
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_WAREHOUSE, {
    variables: { id },
  });
  const warehouseStatus = data.warehouse.status;

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    variables: { id: product.id },
    refetchQueries: [{ query: GET_PRODUCTS }],
  });

  const [updateProduct] = useMutation(UPDATE_PRODUCT, {
    variables: {
      id: product.id,
      name: product.name,
      typeProduct: product.typeProduct,
      unit: leftAmount,
    },
    update(cache, { data: { updateProduct } }) {
      const { products } = cache.readQuery({
        query: GET_PRODUCTS,
      });
      cache.writeQuery({
        query: GET_PRODUCTS,
        data: { products: [...products, updateProduct] },
      });
    },
  });

  const handleImportProduct = (e) => {
    console.log("have fun");
    e.preventDefault();
    setLeftAmount(product.unit - amountToBeImported);
    if (leftAmount > 0) {
      updateProduct(product.id, product.name, product.typeProduct, leftAmount);
    } else {
      deleteProduct(product.id);
    }
  };

  const handleAmountChange = (e) => {
    const max = product.unit;
    const amount = Math.max(1, Math.min(max, Number(e.target.value)));
    setAmountToBeImported(amount);
  };

  return (
    <tr>
      <td className="text-dark">{product.name}</td>
      <td className="text-dark">{product.typeProduct}</td>
      <td className="text-dark">{product.unit}</td>
      <td className="input-group small">
        <input
          type="number"
          className="form-control"
          disabled={warehouseStatus !== product.typeProduct}
          value={amountToBeImported}
          onChange={handleAmountChange}
        />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-light"
          disabled={warehouseStatus !== product.typeProduct}
          onClick={() => setAmountToBeImported(product.unit)}
        >
          All
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          disabled={warehouseStatus !== product.typeProduct}
          onClick={handleImportProduct}
        >
          Import
        </button>
      </td>
    </tr>
  );
}
