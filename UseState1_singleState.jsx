import React, { useState } from "react";

export default function App() {
  const [shubham, setShubham] = useState("");

  const submit = (e) => {
    e.preventDefault();

    console.log(shubham);
  };

  const handleChange = (e) => {
    setShubham(e.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={submit}>
          <input type="text" placeholder="name" onChange={handleChange} />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
