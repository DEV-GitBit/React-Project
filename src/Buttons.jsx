function Buttons() {
  const clickHandler = () => { //if addiing without parameter then the call will not need ().
      alert('Submitted!');
    }
  const clickHandler2 = (name) => { //if adding with parameter then the call will need ().
      alert(`${name} it is cancelled!`);
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