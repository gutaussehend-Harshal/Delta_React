import React, { useState } from "react";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <p>
        <i
          onClick={toggleLike}
          className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
          style={isLiked ? { color: "red" } : { color: "" }}
        ></i>
      </p>
      <p>{isLiked ? "You love me" : "You don't love me"}</p>
    </div>
  );
}

export default LikeButton;
