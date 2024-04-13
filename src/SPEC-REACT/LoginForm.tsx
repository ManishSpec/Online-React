import { useRef, useState } from "react";

function LoginForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const PassRef = useRef<HTMLInputElement>(null);
  const [NameEr, setNameEr] = useState("");
  function Submit() {
    console.log("called login submit");
    if (nameRef.current != null) {
      let temp = nameRef.current.value;
      console.log(temp);
      if (temp.length === 0) {
        console.log("if conditon_1")
        setNameEr("NAME IS REQUIRED");
      } else if (temp.length < 20) {
        setNameEr("MIN LENGTH REQUIRED IS 20_CHARACTERS");
        console.log("if condition_2")
      }
    }
  }
  return (
    <div>
      <div>
        <label>NAME:</label>
        <br></br>
        <input ref={nameRef} type="text"></input>
        <p>{NameEr}</p>
        <br></br>
        <label>PASSWORD</label>
        <br></br>
        <input ref={PassRef} type="text"></input>
        <br></br>
        <button onClick={Submit}>submit</button>
      </div>
    </div>
  );
}
export default LoginForm;
