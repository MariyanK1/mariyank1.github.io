import React from "react";

function CurrentPrice(props) {
  return (
      <td>
        <strong>${props.price.toLocaleString()}</strong>
      </td>
  );
}

export default CurrentPrice;
