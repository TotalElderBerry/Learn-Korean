const Choice = ({value,isSelected,handleClick}) => {
	const style = {
		padding: "10px",
		width: "200px",
		fontSize: "1.2rem",
	}
	const btnStyle ={
		borderRadius: "300px",
		margin: "10px"
	}
	const type = `btn ${(isSelected?"btn-info":"btn-outline-info")} btn-sm`
	return(
		<div>
			<button style={btnStyle} className={type} onClick={handleClick}>
			<section style={style} className="display-1">
				{value.pronunciation}
			</section>
			</button>
		</div>
	)
}

export default Choice