import React from 'react'

const Question = (props) => {
	return (
		<div className="px-1 py-5 m-2">
			<p className="text-2xl md:text-4xl text-gray-700 font-bold">
				{props.value}
			</p>
		</div>
	)
}

export default Question
