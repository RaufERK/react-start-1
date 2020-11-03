

const сar = ({ name, year, color }) => {
  const onCLickHandler = () => {
    console.log('CLICK my CLICK!!!');
  }
  return (
    <div className='carClass'>
      <h1>{name}</h1>
      <div>year : {year}</div>
      <div>color : {color}</div>
      <button onClick={onCLickHandler}>CLICK</button>
    </div>
  );
}

export default сar;
