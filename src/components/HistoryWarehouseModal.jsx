import {
  FaWarehouse,
  FaHistory,
  FaBiohazard,
  FaPhone,
  FaHouseUser,
} from "react-icons/fa";
import ProductRow from "./ProductRow";

export default function HistoryWareHouseModal({ products }) {
  const handleDownloadHistory = () => {};

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#historyModal"
      >
        <FaHistory /> History
      </button>
      <div
        className="modal fade"
        id="historyModal"
        tabIndex="-1"
        aria-labelledby="historyModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="historyModal">
                Warehouse History
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-hover text-dark mt-3">
                <tbody>
                  {products.map((product) => (
                    <ProductRow key={product.id} product={product} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleDownloadHistory}
              >
                Download as .CVS file
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
