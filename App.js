import React from "react";
import ReactDom from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World Update this"
);
console.log(heading);

const heading2 = <h1>Test</h1>;

const Heading3 = () => {
  return (
    <>
      <div>
        <h1> Added the function component</h1>
      </div>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("rot"));

root.render(<Heading3></Heading3>);
