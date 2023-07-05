import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        <label>email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        <label>password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
