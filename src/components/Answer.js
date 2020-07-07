import React from 'react'

const Answer = (props) => {
	return (
		<div
			id={props.id}
			className="block w-full bg-gray-800 hover:bg-purple-900 mx-2 my-3 py-5 px-5 rounded-md cursor-pointer"
			onClick={props.onClick}
		>
			<span className="text-lg md:text-xl text-gray-300 text-center">
				{props.value}
			</span>
		</div>
	)
}

export default Answer
