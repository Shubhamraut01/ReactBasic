import React from "react";

export default function App() {
  const list = [
    { name: "shubham", age: 21, city: "mumbai" },
    { name: "vivek", age: 21, city: "mumbai" },
    { name: "rohan", age: 21, city: "mumbai" },
  ];


  return (
    <>
      <div>
        {list.map((item) => {
          return (
            <>
              <h1>{item.name}</h1>
              <h1>{item.age}</h1>
              <h1>{item.city}</h1>
            </>
          );
        })}
      </div>
    </>
  );
}
