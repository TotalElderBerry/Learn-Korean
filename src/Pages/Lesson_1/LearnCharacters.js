import Card from "../../Components/Card"
import {Routes, Route, Link} from "react-router-dom"
import {consonants,vowels} from "../../utils/characters.js"
import {DisplayCharacter} from "./DisplayCharacter.js"

export const LearnCharacters = () => {
	const style = {
		display: "flex",
		flexWrap: "wrap"
	}
	const group = {
		margin: "10px",
	}
	const card = {
		border: "none",
		background: "none",
	};
	const tempLetters = [...consonants,...vowels]
	const getIndex = (item) => tempLetters.indexOf(item);
	
	return (
		<div>
			<div style={group}>
				<h5 className="display-4">Consonants</h5>
				<div style={style}>
					{consonants.map((ll,idx)=>{
						return (
							<Link key={idx} style={{ textDecoration: 'none' }} to={'/characters'} state={{ id: getIndex(ll) }} >
								<Card letter={ll} size="medium" />
							</Link>
						)
					})
					}
				</div>
			</div>

			<div style={group}>
				<h5 className="display-4">Vowels</h5>
				<div style={style}>
					{vowels.map((ll,idx)=>{
						return (
							// <button style={card} key={idx} onClick={(e)=>console.log(getIndex(ll))}>
								<Link key={idx} style={{ textDecoration: 'none' }} to={'/characters'} state={{ id: getIndex(ll) }} >
								<Card letter={ll} size="medium" />
								</Link>
							// </button>
						)
					})
					}
				</div>
			</div>
			
		</div>
	)
}
