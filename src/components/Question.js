import React from 'react'

// TODO: move current / numofquestions to the game page
const Question = (props) => {
	return (
		<div id={props.id} className="px-1 py-5 m-2">
			{/* {props.currentIndex && props.numOfQuestions && (
				<span className="text-sm font-semibold italic text-gray-700">
					{props.currentIndex} of {props.numOfQuestions}
				</span>
			)} */}
			<p className="text-2xl md:text-4xl text-center text-gray-700 font-bold">
				{props.value}
			</p>
		</div>
	)
}

export default Question
