import { useMutation, update } from "@apollo/client";

import { FaTrash } from "react-icons/fa";
import { GET_PRODUCTS } from "../queries/productQueries";

export default function ProductRow({ product }) {
  return (
    <tr>
      <td className="text-dark">{product.name}</td>
      <td className="text-dark">{product.type}</td>
      <td className="text-dark">{product.unit}</td>
      <td>Import</td>
      <td>Export</td>
    </tr>
  );
}
