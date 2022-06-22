import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export default function CartItem({cartItem, i}) {
  const { clearOneCartItem } = useContext(GlobalContext);

  return (
    <>
       <tbody>
        <tr>
          <td className="cart" key={i}>
            <figure class="itemside align-items-center">
              <div class="aside">
                <img src={cartItem.image} class="img-sm w-100" />
              </div>
              <figcaption class="info">
                {" "}
                <a href="#" class="title text-dark" data-abc="true">
                  {cartItem.name}
                </a>
                <p class="text-muted small">aqui la categoria</p>
              </figcaption>
            </figure>
          </td>
          <td>
            {" "}
            <select class="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>{" "}
          </td>
          <td>
            <div class="price-wrap">
              {" "}
              <span>{cartItem.price.toFixed(2)}</span>
            </div>
          </td>
          <td class="text-right d-none d-md-block">
            {" "}
            <a
              data-original-title="Save to Wishlist"
              title=""
              href=""
              class="btn btn-outline-primary"
              data-toggle="tooltip"
              data-abc="true"
            >
              {" "}
              <i class="fa fa-heart"></i>
            </a>{" "}
            <br />
            <button
              class="btn btn-outline-danger"
              onClick={() => clearOneCartItem(cartItem.id)}
              data-abc="true"
            >
              ❌
            </button>{" "}
          </td>
        </tr>
      </tbody>
    </>
  )
}
