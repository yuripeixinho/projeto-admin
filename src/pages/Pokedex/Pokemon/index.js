import React from "react";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
