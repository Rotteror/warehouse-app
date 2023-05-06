
export default function ProductRow({ product }) {
  return (
    <tr>
      <td className="text-dark">{product.name}</td>
      <td className="text-dark">{product.typeProduct}</td>
      <td className="text-dark">{product.unit}</td>
    </tr>
  );
}
