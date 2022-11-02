import Card from "../Components/Card"
import React, {useState} from "react"
import {consonants,vowels,letters} from "../utils/characters.js"
import { useLocation } from 'react-router-dom'
import DisplayCards from "../Components/DisplayCards"

export const DisplayCharacter = () => {
	const location = useLocation()
	const [character,setCharacter] = useState(location.state.id)
	const clickNext = () => {
		setCharacter(character => (letters.length - 1=== character)? letters.length - 1:character + 1)
	}

	const clickPrevious = () => {
		setCharacter(character => (character === 0)? 0:character - 1)
	}

	const isVowel = () => vowels.includes(letters[character])?true:false;

	const style = {
		display: "flex",
		flexFlow: "column",
		alignItems: "center",
		textAlign: "center",
	};
	const parentStyle = {
		top:"50%",
		left: "50%",
	    transform: "translate3d(-50%,-50%, 0)",
        position: "absolute",
	}
	const description = {
	}
	const pro = {
		flexGrow: "1"
	}
	const buttonStyle = {
		borderRadius: "50px",
	}
	const cardContainer = {
		display: "flex",
		alignItems: "center",
		margin: "0px 10px"
	}
	const cards = {
		position: "relative",
		margin: "0"
	}
	return (
		<div style={parentStyle}> 
			<section style={style}>
			<div style={cardContainer}>
				<button style={buttonStyle} className="btn btn-outline-dark btn-lg" onClick={clickPrevious}>⇦</button>
				<Card letter={letters[character]} color={isVowel()?"red":""} size="large" hoverable="false"/>
				<button style={buttonStyle} className="btn btn-dark btn-lg" onClick={clickNext}>⇨</button>
			</div>
			<div className="lead" style={pro}>Pronunciation: {letters[character].pronunciation}</div>
			<div className="lead" style={description}>
				<p>{letters[character].description}</p>
			</div>
			</section>
			<section style = {cards}>
			<DisplayCards highlighted={character}/>
			</section>
		</div>
	)
}
