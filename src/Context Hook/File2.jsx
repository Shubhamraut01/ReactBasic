import React from "react";
import { NameContext } from "./main";
import { useContext } from "react";

export default function File2() {
  const fname = useContext(NameContext);
  return (
    <div>
      <h1>my name is {fname}</h1>
    </div>
  );
}
