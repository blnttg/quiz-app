import React from 'react'

const Question = (props) => {
	return (
		<div id={props.id} className="px-1 py-3 m-2">
			<p className="text-2xl md:text-4xl text-center text-gray-700 font-bold">
				{props.value}
			</p>
		</div>
	)
}

export default Question
