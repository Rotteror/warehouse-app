import {
  FaWarehouse,
  FaHistory,
  FaBiohazard,
  FaPhone,
  FaHouseUser,
} from "react-icons/fa";
import { products } from "../mockData";
import HistoryWarehouseModal from "./HistoryWarehouseModal";
import ProductRow from "./ProductRow";
// Warehouse info
export default function WarehouseInfo({ warehouse }) {
  return (
    <>
      <h5 className="mt-5">Product Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaHouseUser className="icon" /> Name {warehouse[0].name}
        </li>
        <li className="list-group-item">
          <FaBiohazard className="icon" /> Type {warehouse[0].type}
        </li>
        <li className="list-group-item">
          <FaWarehouse /> Size
          {warehouse[0].size}
        </li>
      </ul>
      <table className="table table-hover mt-3">
        <tbody>
          {warehouse[0].products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
            />
          ))}
        </tbody>
      </table>
      <HistoryWarehouseModal products={warehouse} />
    </>
  );
}
