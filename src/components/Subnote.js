import React from "react";

export default function Subnote({ note }) {
  console.log({ note });
  return (
    <div className="box">
      <p>{note}</p>
    </div>
  );
}
