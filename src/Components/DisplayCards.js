 import { Link } from "react-router-dom"
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
						<Link style={{textDecoration: "none"}} to={`/character/${l.character}`}>
							<Card letter={l} size="small" highlighted={(highlighted === idx)?"true":"false"}/>
						</Link>
					</div>
				)
			})}

		</div>
	)
 }

 export default DisplayCards