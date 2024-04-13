import { useState } from "react";

function StateDemo() {
  // const [count , setCount]=useState(0);
  // function I(){
  //     setCount(count+1);
  //     console.log("INCREMENT CALLED ");
  // }
  // function D(){
  //     setCount(count-1);
  //     console.log("DECREMENT CALLED ");
  // }
  // return( <div>
  //     <button onClick={I}>INCREMENT</button>
  //     <h1>{count}</h1>
  //     <button onClick={D}>DECREMENT</button>
  // </div>
  // );
  let name = ["MANISH", "KISHORE", "HARI", "KESHAVA", "VIJAY"];
  const [names, setNames] = useState(name[0]);
  const [count, setCount] = useState(0);
  function I() {
    setCount(count + 1);
    setNames(name[count + 1]);
    console.log("INCREMENT CALLED ");
  }
  function D() {
    setCount(count - 1);
    setNames(name[count - 1]);
    console.log("DECREMENT CALLED ");
  }

  return (
    <div>
      <button onClick={I}>NEXT</button>
      <h1>{names}</h1>
      <button onClick={D}>PREVIOUS</button>
    </div>
  );
}
export default StateDemo;
