import React from "react";

function ChangePercent7(props) {
  return Number(props.price7) >= 0 ? (
    <td className="positive">{Number(props.price7).toFixed(1)}%</td>
  ) : (
    <td className="negative">{Number(props.price7).toFixed(1)}%</td>
  );
}

export default ChangePercent7;
