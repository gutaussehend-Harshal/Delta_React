function printHello() {
  console.log("Hello!");
}

function printBye() {
  console.log("Bye!");
}

function handleHover() {
  console.log("Hover!");
}

function handleDblClick() {
  console.log("Double click!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
      <p onClick={printBye}>This parah for event demo</p>
      {/* <button onMouseOver={handleHover}>Hover me!</button> */}
      <button onDoubleClick={handleDblClick}>Double Click me!</button>
    </div>
  );
}
