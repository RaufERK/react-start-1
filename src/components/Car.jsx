// import { useState } from "react";

const сar = ({ key, name, year, color, setNewName }) => {
  // const [inputText, setInputText] = useState('');
  return (
    <div className="carClass" key={key}>
      <h1>{name}</h1>
      <div>year : {year}</div>
      <div>color : {color}</div>
      {/* <button onClick={setTitle.bind(this, name + year + color)}>CLICK</button> */}
      <input
        type="text"
        onChange={(e) => setNewName(e.target.value)}
        value={name}
      />
      {/* <button onClick={() => setNewName(inputText)}>CHANGE</button> */}
    </div>
  );
};

export default сar;
