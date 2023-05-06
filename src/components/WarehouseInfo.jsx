import {
  FaWarehouse,
  FaBiohazard,
  FaHouseUser,
} from "react-icons/fa";
import HistoryWarehouseModal from "./HistoryWarehouseModal";
import ProductRow from "./ProductRow";

export default function WarehouseInfo({ warehouse }) {
  return (
    <>
      <h5 className="mt-5">Warehouse Information</h5>
      <ul className="list-group">
        <li className="list-group-item d-flex gap-3">
          <span>
            <FaHouseUser className="icon" /> Name
          </span>
          <p>{warehouse.name}</p>
        </li>
        <li className="list-group-item d-flex gap-4">
          <span>
            <FaBiohazard className="icon" /> Type
          </span>
          <p>{warehouse.status}</p>
        </li>
        <li className="list-group-item d-flex gap-4">
          <span>
            <FaWarehouse className="icon" /> Size
          </span>
          <p>{warehouse.size}</p>
        </li>
      </ul>
      <table className="table table-hover mt-3">
        {warehouse.products === null ? null : (
          <tbody>
            {warehouse.products?.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        )}
      </table>
      <HistoryWarehouseModal products={warehouse.products} />
    </>
  );
}
