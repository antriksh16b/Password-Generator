import { useState } from "react";
function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [characterAllowed, setCharacterAllowed] = useState(false);
  function changelength(event) {
    setLength(event.target.value);
  }
  function checkNumberAllowed() {
    if (numberAllowed === false) {
      setNumberAllowed(true);
    } else if (numberAllowed === true) {
      setNumberAllowed(false);
    }
    passwordgenerate();
  }
  function checkCharacterAllowed() {
    if (characterAllowed === false) {
      setCharacterAllowed(true);
    } else if (characterAllowed === true) {
      setCharacterAllowed(false);
    }
    passwordgenerate();
  }
  let text;
  function passwordgenerate() {
    text = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed === true) {
      str = str + "1234567890";
    }
    if (characterAllowed === true) {
      str = str + " !@#$%&*-_+=[]{}~` ";
    }
    for (let i = 1; i <= length; i++) {
      let a = Math.floor(Math.random() * str.length + 1);
      text += str.charAt(a);
    }
    return text;
  }
  return (
    <div className="bg-black h-lvh pt-10">
      <div className="bg-white w-full max-w-lg shadow-md mx-auto rounded-lg p-8">
        <h1 className="text-center">Password generator</h1>
        <div className="flex shadow overflow-hidden rounded-lg mb-4">
          <input
            type="text"
            spellCheck="false"
            value={passwordgenerate()}
            className=" outline-none border-solid border-2 border-black p-1 border-e-0 w-full"
            placeholder="Password"
            readOnly
          ></input>
          <button className="bg-blue-400 px-3 py-1 border-2 border-black border-s-0">
            <input
              type="text"
              spellCheck="false"
              value={text}
              className=" outline-none border-solid border-2 border-black p-1 border-e-0 w-full"
              placeholder="Password"
              readOnly
            ></input>
            Copy
          </button>
        </div>
        <div className="flex gap-x-2 text-sm">
          <div className="flex gap-x-1 items-center">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={changelength}
              className="cursor-pointer"
            ></input>
            <label>Length: {length}</label>
          </div>
          <div className="flex gap-x-1 items-center">
            <input
              type="checkbox"
              id="number"
              onChange={checkNumberAllowed}
            ></input>
            <label htmlFor="number">Number</label>
          </div>
          <div className="flex gap-x-1 items-center">
            <input
              type="checkbox"
              id="character"
              onChange={checkCharacterAllowed}
            ></input>
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
