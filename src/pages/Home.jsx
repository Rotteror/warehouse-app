import Products from "../components/Products";
import Warehouses from "../components/Warehouses";
import AddProductModal from "../components/AddProductModal";
import AddWarehouseModal from "../components/AddWarehouseModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddProductModal />
        <AddWarehouseModal />
      </div>
      <Warehouses />
      <hr />
      <Products />
    </>
  );
}
