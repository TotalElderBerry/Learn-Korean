import React from 'react'


const Card = ({letter,highlighted,size,hoverable}) => {
	const getSize = () => {
    switch(size){
      case "large": return "250px"
      case "medium": return "75px"
      case "small": return "50px"
      default: return "110px"
    }
  }
  const getColor = () => {
    if(highlighted === "true") return "pink"
    switch(letter.type){
      case "vowel": return "DodgerBlue"
      case "consonant": return "#dc3a44"
      default: return "#dc3a44"
    }
  }
  console.log(highlighted)
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