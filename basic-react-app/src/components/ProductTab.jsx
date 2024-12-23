import React from "react";
import Product from "./Product";
import MsgBox from "./MsgBox";

function ProductTab() {
  // let options = ["hi-tech", "durable", "fast"];
  // let options2 = { a: "hi-tech", b: "durable", c: "fast" };

  return (
    <div>
      {/* <Product title="Harshal" age={28} />
      <Product title="Jidnyasa" age={26} />
      <Product title="Nikhil" age={26} /> */}

      <MsgBox title="Harshal" style={{ backgroundColor: "red" }} />
      <MsgBox title="Jidnyasa" style={{ backgroundColor: "pink" }} />
      <MsgBox title="Nikhil" style={{ backgroundColor: "blue" }} />
    </div>
  );
}

export default ProductTab;
