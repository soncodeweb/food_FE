import React, { Fragment } from "react";
import { useCheckout } from "../../context/checkoutContext";
function ProductCartPage({
  addProduct = () => {},
  deleteProduct = () => {},
  deleteProductInCart = () => {},
  idCart,
  productId,
  name,
  sortDesc,
  price,
  discount,
  quantity,
  thumbail,
}) {
  return (
    <>
      <tr>
        <td className="close" onClick={deleteProductInCart}>
          <a href="" onClick={(e) => e.preventDefault()}>
            x
          </a>
        </td>
        <td className="image">
          <img src={thumbail} alt="" className="image-product" />
        </td>
        <td>
          <a href="" className="title">
            {name}
          </a>
        </td>
        {discount && discount !== null && discount > 0 ? (
          <td>
            <span className="price">${discount}</span>
          </td>
        ) : (
          <td>
            <span className="price">${price}</span>
          </td>
        )}
        <td>
          <input type="number" step="0.5" min="0" defaultValue={quantity} className="quantity" />
        </td>
        {discount && discount !== null && discount > 0 ? (
          <td>
            <span className="total">${discount * quantity}</span>
          </td>
        ) : (
          <td>
            <span className="total">${price * quantity}</span>
          </td>
        )}

        <td>
          <input
            type="checkbox"
            className="choise"
            // checked={check(productId)}
            onChange={(e) => {
              // if (check(idCart)) {
              //   e.target.checked = true;
              // }
              if (e.target.checked) {
                addProduct();
              } else {
                deleteProduct();
              }
            }}
          />
        </td>
      </tr>
    </>
  );
}

export default ProductCartPage;
