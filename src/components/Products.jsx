import { useQuery } from "@apollo/client";

import ProductRow from "./ProductRow";
import Spinner from "./Spinner";
import { GET_PRODUCTS } from "../queries/productQueries";
import { products } from "../mockData";
export default function Products() {
  // const { loading, error, data } = useQuery(GET_PRODUCTS);

  // if (loading) return <Spinner />;
  // if (error) return <p>Something went wrong...</p>;
  return (
    <>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </>
  );
}
