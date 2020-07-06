import React, { useEffect } from 'react'

// TODO: color by correct / wrong
const Answer = (props) => {
	return (
		<div
			id={props.id}
			className="block w-full bg-purple-800 hover:bg-purple-900 mx-2 my-3 py-5 px-5 rounded-md cursor-pointer"
			onClick={props.onClick}
			disabled={props.disabled}
		>
			<span className="text-lg md:text-xl text-gray-300 text-center">
				{props.value}
			</span>
		</div>
	)
}

export default Answer
