import React from 'react'



const Card = ({letter,color,size,hoverable}) => {
	
	const cardstyle = {
      color: "white",
      backgroundColor: color === "red"?"DodgerBlue":"#dc3a44",
      fontFamily: "Arial",
      width: size === "large"?"250px":"100px",
      height: size === "large"?"250px":"100px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
      transition: "transform 1s ease"
    };
    const text = {
    	fontSize: size === "large"?"7rem":"2.7rem",
    	margin: "0",
    	color: "white"
    }
	return (
		<div style={cardstyle} className={hoverable === "true"?"btnHover":""}>
			<p style={text}>{letter.character}</p>
		</div>
	)
}

export default Card;