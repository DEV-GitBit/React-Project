function Buttons() {
  let count = 0;

  const clickHandler = () => { //if addiing without parameter then the call will not need ().
    if (count < 5) {
      count++;
      console.log(`Submitted ${count} times`);
    }
    else {
      console.log(`You have reached the limit`);
    }
  }
  const clickHandler2 = (name) => { //if adding with parameter then the call will need ().
      console.log(`${name} it is cancelled!`);
    }
  const style1 = {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      margin : '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    }
    const style2 = {
      backgroundColor: 'red',
      color: 'white',
      padding: '10px 20px',
      margin : '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      // display: 'block',
    }

  return (
  <>
  <button style={style1} onClick={clickHandler}>Submit</button> 
  <button style={style2} onClick={() => clickHandler2(`Rishabh`)}>Cancel</button>
  </>
  );

}
export default Buttons;