import React, { useEffect, useState } from "react";

export default function File2() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();

    // Reset the form values
    setForm({
      name: "",
      email: "",
      password: "",
    });
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <p>{JSON.stringify(form)}</p>
        <form onSubmit={handleSubmit}>
          <label>name : </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
            required
          />

          <br />
          <br />

          <label>email : </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <label>password : </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
