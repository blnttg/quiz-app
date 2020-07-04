import React from 'react'
import Answer from './Answer'

const Answers = (props) => {
	return (
		<div className="w-10/12 md:w-4/6">
			{props.value.map((value, index) => (
				<Answer key={index} value={value} />
			))}
		</div>
	)
}

export default Answers
