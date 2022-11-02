import React from 'react'


const Card = ({letter,color,size,hoverable}) => {
	const getSize = () => {
    switch(size){
      case "large": return "250px"
      case "small": return "50px"
      default: return "100px"
    }
  }
  const getColor = () => {
    switch(color){
      case "red": return "DodgerBlue"
      case "pink": return "red"
      default: return "#dc3a44"
    }
  }
	const cardstyle = {
      color: "white",
      backgroundColor: getColor(),
      fontFamily: "Arial",
      width: getSize(),
      height: getSize(),
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