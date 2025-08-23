function Buttons() {

  const style1 = {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      margin : '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      // display: 'block',
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
  <button style={style1}>Submit</button>
  <button style={style2}>Cancel</button>
  </>
  );

}
export default Buttons;