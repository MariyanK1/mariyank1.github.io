import React from "react";

function CirculatingSupply(props) {
  return (
      <td>
        <strong>
          {props.value.toLocaleString()}
          {"  "}
          <small>{props.symbol.toUpperCase()}</small>
        </strong>
      </td>
  );
}

export default CirculatingSupply;
