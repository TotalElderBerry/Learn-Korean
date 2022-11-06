import Card from "./Card.js"
import Choice from "./Choice.js"
import QuizBanner from "./QuizBanner.js"
import {consonants,vowels,letters} from "../utils/characters.js"
import React, {useState, useEffect} from "react"
export const Questionnaire = () => {
	const [isCorrect,setIsCorrect] = useState(false);
	const [question,setQuestion] = useState(vowels[0])
	const [selectedChoice,setSelectedChoice] = useState(-1)
	const [choices,setChoices] = useState([])
	const [isLoading,setLoading] = useState(false)
	const [toShow,setShow] = useState()
	const style = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column"
	}

	const parentstyle = {
		top:"50%",
		left: "50%",
	    transform: "translate3d(-50%,-50%, 0)",
        position: "absolute",
	}


	const handleClick = (i) => {
		console.log("I am clicked")
		setSelectedChoice(i)
		
	}

	const checkAnswer = () => {
		if(choices[selectedChoice].pronunciation !== question.pronunciation) return false
		return true;
	}

	const generateChoices = () => {
		const choices = []
		const tempArray = [...letters]
		let i = 0;
		while(i < 4){
			const number = Math.floor(Math.random() * tempArray.length)
			choices.push(letters[number])
			tempArray.splice(number,1)
			i++
		}
		const number = Math.floor(Math.random() * 4)
		choices[number] = question
		console.log(question)
		setChoices(choices)
	}

	const handleSubmit = () => {
		if(selectedChoice != -1){
			setIsCorrect(checkAnswer())
			setShow(true)
			setTimeout(()=>{
				setQuestion(letters[Math.floor(Math.random() * letters.length)])
				generateChoices()
				setSelectedChoice(-1)
				setShow(false)
			},1500)	
		}
	}
	useEffect(() => {
		generateChoices()  
		setLoading(true)  
	},[isLoading,question]);
	console.log(isCorrect)
	return (
		<>
		{
				toShow?
					<QuizBanner isCorrect={isCorrect}/>
				: <></>
			}
		<div className="container" style={parentstyle}>

			{isLoading === false?<></>:
			<article style={style}>
				<section className="row">
					<Card letter={question}/>
				</section>
				<section className="row">
				{
					choices.map((val,idx) => {
						return	<div key={idx} className="col-6" align={(idx%2)!=0?"left":"right"}><Choice value={choices[idx]} isSelected={selectedChoice === idx?true:false} handleClick={(e)=>handleClick(idx)}/></div>
					})
					
				}
				</section>
				
				<section>
					<button type="button" className="btn btn-success" onClick={handleSubmit}>Submit</button>
				</section>
			</article>	
			}
			
		</div>
		</>
	)
}
