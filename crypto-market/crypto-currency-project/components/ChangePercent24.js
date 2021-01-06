import React from "react";

function ChangePercent24h(props) {
  return Number(props.price24) >= 0 ? (
    <td className="positive">{Number(props.price24).toFixed(1)}%</td>
  ) : (
    <td className="negative">{Number(props.price24).toFixed(1)}%</td>
  );
}

export default ChangePercent24h;
