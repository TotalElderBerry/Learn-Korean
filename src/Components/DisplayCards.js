 import {consonants,vowels,letters} from "../utils/characters.js"
 import Card from "./Card.js"


 const DisplayCards = ({highlighted}) => {
 	const style = {
 		display: "flex",
 		flexWrap: "wrap",
 		width: "100vw",
 		justifyContent: "center"
 	}
 	return (
		<div style={style}> 
			{letters.map((l,idx)=>{
				return (
					<div key={idx}>
					<Card letter={l} size="small" color={(highlighted === idx)?"pink":"red"}/>
					</div>
				)
			})}

		</div>
	)
 }

 export default DisplayCards