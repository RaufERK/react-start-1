const сar = ({ key, name, year, color, setTitle }) => {
  return (
    <div className="carClass" key={key}>
      <h1>{name}</h1>
      <div>year : {year}</div>
      <div>color : {color}</div>
      <button onClick={setTitle.bind(this, name + year + color)}>CLICK</button>
    </div>
  );
};

export default сar;
