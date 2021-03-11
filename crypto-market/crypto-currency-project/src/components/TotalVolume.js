import React from "react";

function TotalVolume(props) {
  return (
      <td>${props.value.toLocaleString()}</td>
  );
}

export default TotalVolume;
