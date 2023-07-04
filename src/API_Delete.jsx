import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch("http://localhost:8000/posts").then((result) => {
      result.json().then((res) => {
        setData(res);
      });
    });
  };

  console.log(data);

  const deleteRow = (id) => {
    fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);
        getList();
      });
    });
  };

  return (
    <>
      <div>
        <h1>API</h1>
        <table border="1px solid black ">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
          {data.map((res, index) => {
            return (
              <tr>
                <td>{res.id}</td>
                <td>{res.title}</td>
                <td>{res.author}</td>
                <td>
                  <button onClick={() => deleteRow(res.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default App;
