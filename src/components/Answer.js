import React from 'react'

const Answer = (props) => {
	return (
		<div
			className="bg-gray-900 hover:bg-gray-800 mx-2 my-3 py-5 px-5 rounded-md cursor-pointer"
			onClick={props.onClick}
		>
			<p className="text-lg md:text-xl text-gray-300 text-center">
				{props.value}
			</p>
		</div>
	)
}

export default Answer
