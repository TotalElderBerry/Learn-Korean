const QuizBanner = ({isCorrect}) => {
	const correctMessage = "Correct! Way to Go"
	const wrongMessage = "Answer is Wrong!"

	const style = `alert ${(isCorrect?"alert-success":"alert-danger")}`
	return(
		<div className={style} role="alert">
		  {isCorrect?correctMessage:wrongMessage}
		</div>
	)
}

export default QuizBanner