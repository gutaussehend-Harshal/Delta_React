import React from "react";
import { useState } from "react";

function CommentsForm() {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5
  });

  let handleInputchange = (e) => {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };

  let handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    setFormData({ username: "", remarks: "", rating: 5 });
  };

  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        &nbsp;&nbsp;
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputchange}
          id="username"
          name="username"
        />
        <br></br>
        <br></br>
        <label htmlFor="remarks">Remarks</label>
        &nbsp;&nbsp;
        <textarea
          value={formData.remarks}
          placeholder="add few remarks"
          onChange={handleInputchange}
          id="remarks"
          name="remarks"
        >
          Remarks
        </textarea>
        <br></br>
        <label htmlFor="rating">Ratings</label>
        &nbsp;&nbsp;
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputchange}
          id="rating"
          name="rating"
        />
        <br></br>
        <br></br>
        <button>Add Comment</button>
      </form>
    </div>
  );
}

export default CommentsForm;
