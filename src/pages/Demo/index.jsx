import React from "react";
import { useRef } from "react/cjs/react.development";
import TestChild from "./MyTest";

export default function Demo(props) {
  const countRef = useRef();
  const forwardrefInPut = () => {
    let thaydoivalue = countRef.current.value;
    countRef.current.focus();
  };
  const whatcount=()=>{
      countRef.current.add();
  }
  return (
    <div>
      <TestChild number="30" name="inputtext" valueinput="10" ref={countRef} />
      <button onClick={forwardrefInPut}>FoCus</button>
      <button onClick={whatcount}>what is this count</button>
    </div>
  );
}
