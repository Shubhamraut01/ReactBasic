import "./App.css";
import React, { useEffect, useState } from "react";
function Api1() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/posts").then((result) => {
      result.json().then((res) => {
        setData(res);
      });
    });
  }, []);
  console.log(data);
  return (
    <>
      <div>
        <h1>API</h1>
        <table border="1px solid black ">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
          {data.map((res, index) => {
            return (
              <tr>
                <td>{res.id}</td>
                <td>{res.title}</td>
                <td>{res.author}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Api1;
