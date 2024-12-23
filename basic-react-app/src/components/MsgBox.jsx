import React from "react";

function MsgBox({ title, style }) {
  return (
    <div style={style}>
      <p>{title}</p>
    </div>
  );
}

export default MsgBox;
