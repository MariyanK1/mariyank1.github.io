import React from "react";
import Image from "./CoinImage";

function Name(props) {
  return (
    <>
      <Image image={props.image} /> <strong>{props.name}</strong>(
      {props.symbol.toUpperCase()})
    </>
  );
}

export default Name;
