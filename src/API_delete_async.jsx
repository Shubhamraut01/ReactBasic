import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const apidata = await fetch("http://localhost:8000/posts");
    const dataapi = await apidata.json();
    setData(dataapi);
  };

  console.log(data);

  const deleteRow = async (id) => {
    const deleteapi = await fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
    });
    const deleteapijson = await deleteapi.json();

    console.log(deleteapijson);
    getList();
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
