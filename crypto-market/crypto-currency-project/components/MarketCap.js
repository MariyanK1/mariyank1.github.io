import React from "react";

function MarketCap(props) {
  return (
      <td>
        <strong>${props.value.toLocaleString()}</strong>
      </td>
  );
}

export default MarketCap;
