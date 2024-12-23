import React from "react";

function handleFormSubmit(e) {
  e.preventDefault();
  console.log("Form was submitted");
}

function Form() {
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Write Something" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
