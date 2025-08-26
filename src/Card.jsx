function Card() {
  const onClickHandler = (e) => {
    e.target.style.display = 'none';
  }

  return (
    <>
    <div className="card">
        <img onClick={(e) => onClickHandler(e)} className="card-img" src="src/assets/me.jpg" alt="profile picture" />
        <h2 className="card-title" >Rishabh Singh</h2>
        <p className="card-desc" >I am a Full-Stack developer, currently working for 'GOOGLE' as a Designer.</p>
    </div>
    <div className="card">
        <img onClick={(e) => onClickHandler(e)} className="card-img" src="src/assets/me.jpg" alt="profile picture" />
        <h2 className="card-title" >Rishabh Singh</h2>
        <p className="card-desc" >I am a Full-Stack developer, currently working for 'GOOGLE' as a Designer.</p>
    </div>
    
    </>
  );
}
export default Card;