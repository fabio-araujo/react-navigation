import React from "react";
import { useParams } from "react-router-dom";

const Param = (props) => {
  const { id } = useParams();
  return (
    <div className="Home">
      <h1>Param</h1>
      <p>Result: {id}!</p>
    </div>
  );
};

export default Param;
