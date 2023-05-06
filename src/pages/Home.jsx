import {
  Products,
  Warehouses,
  AddProductModal,
  AddWarehouseModal,
} from "../components/index";

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
