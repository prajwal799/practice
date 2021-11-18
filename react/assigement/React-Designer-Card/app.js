import React from "react";
import "./styles.css";
import Image from "./component1/img.jsx";
import Name from "./component1/nameimage.jsx";
import CircleImage from "./component1/circleIamge";
import Paragraph from "./component1/paragraph.jsx";
import Detalis from "./component1/delatisImage.jsx";
import Button from "./component1/Button.jsx";
import Textred from "./component1/textred";
export default function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "600px",
          height: "600px",
          margin: "auto",
          background: "fdfdfd"
        }}
      >
        <Image imageaddress={"https://wallpaperaccess.com/full/2237015.jpg"} />
        <div>
          <Name title={"Pepperoni Pizza"} />
          <div style={{ marginRight: "50px" }}>
            <CircleImage
              CircleImageaddress={"https://dummyimage.com/40x40/fff/aaa"}
            />
            <CircleImage
              CircleImageaddress={"https://dummyimage.com/40x40/fff/aaa"}
            />
          </div>
        </div>
        <Paragraph
          title={
            "Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust"
          }
        />
        <div
          style={{
            display: "flex",
            width: "500px",
            marginLeft: "80px",
            height: "40px"
          }}
        >
          <Detalis title={"265 Cal"} />
          <Detalis title={"P/F/C: 12/10/31"} />
          <Detalis title={"53.8 C"} />
        </div>
        <div
          style={{
            display: "flex",
            width: "500px",
            marginLeft: "80px",
            height: "40px"
          }}
        >
          <Detalis title="$23.90" />
          <Textred title="$23.90" />
          <Button title="ORDER" colour="green" />
        </div>
      </div>
    </div>
  );
}