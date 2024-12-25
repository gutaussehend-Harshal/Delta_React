import React from "react";
import { useState } from "react";

function Form() {
  //   const [fullName, setFullName] = useState("");
  //   const [username, setUsername] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: ""
  });

  let handleInputData = (e) => {
    let fieldName = e.target.name;
    let newValue = e.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ fullName: "", username: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <br></br>
      <input
        type="text"
        placeholder="Enter full name"
        value={formData.fullName}
        onChange={handleInputData}
        id="fullName"
        name="fullName"
      />
      &nbsp;&nbsp;&nbsp;
      <br></br>
      <br></br>
      <label htmlFor="username">username</label>
      <br></br>
      <input
        type="text"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleInputData}
        id="username"
        name="username"
      />
      <br></br>
      <br></br>
      <label htmlFor="password">Password</label>
      <br></br>
      <input
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleInputData}
        id="password"
        name="password"
      />
      <br></br>
      <br></br>
      <button>Submit</button>
    </form>
  );
}

export default Form;
