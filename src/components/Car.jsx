// import { useState } from "react";

const сar = ({ key, name, year, color, setNewName }) => {
  // const [inputText, setInputText] = useState('');
  const inputClasses = ["input"];
  if (name === "") {
    inputClasses.push("red");
  } else {
    inputClasses.push("green");
    if (name.length>4){
      inputClasses.push("bold");
    }
  }
  return (
    <div className="carClass" key={key}>
      <h1>{name}</h1>
      <div>year : {year}</div>
      <div>color : {color}</div>
      {/* <button onClick={setTitle.bind(this, name + year + color)}>CLICK</button> */}
      <div>{inputClasses.join(' ')}</div>
      <input
        className={inputClasses.join(' ')}
        type="text"
        onChange={(e) => setNewName(e.target.value)}
        value={name}
      />
      {/* <button onClick={() => setNewName(inputText)}>CHANGE</button> */}
    </div>
  );
};

export default сar;
