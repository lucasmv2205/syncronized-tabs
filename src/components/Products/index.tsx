import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <h1>Products List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="1">1</Link>
            </td>
            <td>Product 1</td>
            <td>$ 100.00</td>
          </tr>
          <tr>
            <td>
              <Link to="2">2</Link>
            </td>
            <td>Product 2</td>
            <td>$ 200.00</td>
          </tr>
          <tr>
            <td>
              <Link to="3">3</Link>
            </td>
            <td>Product 3</td>
            <td>$ 300.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};