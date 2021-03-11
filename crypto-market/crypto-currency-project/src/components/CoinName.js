import React from "react";
import Image from "./CoinImage";

function Name(props) {
  return (
    <td>
      <Image image={props.image} /> <strong>{props.name}</strong>(
      {props.symbol.toUpperCase()})
    </td>
  );
}

export default Name;
