import Card from "./Card.js"
import Choice from "./Choice.js"
import QuizBanner from "./QuizBanner.js"
import {consonants,vowels,letters} from "../utils/characters.js"
import React, {useState, useEffect} from "react"
export const Questionnaire = () => {
	const [isCorrect,setIsCorrect] = useState(false);
	const [question,setQuestion] = useState()
	const [selectedChoice,setSelectedChoice] = useState(-1)
	const [choices,setChoices] = useState([])
	const [isLoading,setLoading] = useState(true)
	const [toShow,setShow] = useState()
	const [items,setItems] = useState()
	// let items = []
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
		setSelectedChoice(i)
	}

	const checkAnswer = () => {
		if(choices[selectedChoice].pronunciation !== question.pronunciation) return false
		return true;
	}

	useEffect(()=>{
		generateQuestions(6).then((v) => {
			setItems(v)
			console.log("inside useeffect");
			console.log(items);
			
			setLoading(false)
		})
		console.log(items);
	},[])
	
	const generateQuestions = async (n) => {
		const temp = [...letters]
		const questions = []
		let index = Math.floor(Math.random() * temp.length)
		let i = 0;
		while(i < n) {
			questions.push(temp[index])
			temp.splice(index,1)
			index = Math.floor(Math.random() * temp.length)
			i++
		}
		const newindex = Math.floor(Math.random() * questions.length)
		const q = questions[newindex];
		setQuestion(q)
		setChoices(generateChoices(q))
		return questions
	}

	const getQuestion = () => {
		console.log(items);
		const index = Math.floor(Math.random() * items.length)
		const question = items[index];
		items.splice(index,1)
		return question
	}
	const generateChoices = (ans) => {
		const choices = []
		const tempArray = [...letters]
		let i = 0;
		while(i < 4){
			const number = Math.floor(Math.random() * tempArray.length)
			choices.push(tempArray[number])
			tempArray.splice(number,1)
			i++
		}
		const number = Math.floor(Math.random() * 4)
		choices[number] = ans
		console.log(ans);
		return choices
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(selectedChoice != -1){
			setIsCorrect(checkAnswer())
			setShow(true)
			setTimeout(()=>{
				if(items.length > 1){
					const q = getQuestion();
					const c = generateChoices(q)

					console.log(q);
					setChoices(c);
					setQuestion(q)
					setSelectedChoice(-1)
					setShow(false)
				}
			},1500)	
		}
	}

/*
	const generateSingleQuestion = () => {
		const number = Math.floor(Math.random() * items.length)
		console.log(items);
		items.splice(number,1)
		generateChoices(items[number])
		return items[number]
	}

	const generateQuestions = async (n) => {
		const tempArray = [...letters]
		const q = []
		let i = 0;
		while(i < n){
			const number = Math.floor(Math.random() * tempArray.length)
			q.push(letters[number])
			tempArray.splice(number,1)
			i++
		}
		return q
	}

	const generateChoices = (answer) => {
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
		choices[number] = answer
		setChoices(choices)
	}

	const handleSubmit = () => {
		if(selectedChoice != -1){
			setIsCorrect(checkAnswer())
			setShow(true)
			setTimeout(()=>{
				// if(items.length > 1){
					setQuestion(generateSingleQuestion())
					console.log(question);
					generateChoices(question)
					setSelectedChoice(-1)
					setShow(false)
				// }
			},1500)	
		}
	}

	const getQuestion = async () => {
		const x = await generateQuestions(5).then((val)=>{
			setItems(val)
			console.log(items);
			const str = generateSingleQuestion();
			setQuestion(str)
			return str
		})
		return x	
	}

	useEffect(()=>{
		getQuestion().then((val) => {
			console.log(question);
			setLoading(false)
		})
	},[question])
	
	console.log(items);
*/

	console.log("rendered ");
	console.log(items);
	return (
		<>
		{console.log("dom")}
		{
				toShow?
					<QuizBanner isCorrect={isCorrect}/>
				: <></>
			}
		<div className="container" style={parentstyle}>
			{isLoading === true?<p>Loading</p>:
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
					<button type="button" className="btn btn-success" onClick={(e) => handleSubmit(e)}>Submit</button>
				</section>
			</article>	
			}
			
		</div>
		</>
	)
}
