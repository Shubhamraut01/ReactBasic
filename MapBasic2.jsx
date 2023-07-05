import React from "react";

export default function App() {
  const list = [
    { name: "shubham", age: 21, city: "mumbai" },
    { name: "vivek", age: 21, city: "mumbai" },
    { name: "rohan", age: 21, city: "mumbai" },
  ];

  function val(value) {
    return (
      <div>
        <h1>{value.name}</h1>
        <h1>{value.age}</h1>
        <h1>{value.city}</h1>
      </div>
    );
    }
  return (
    <>
      <div>{list.map(val)}</div>
    
    </>
  );
}
