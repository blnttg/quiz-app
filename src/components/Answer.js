import React, { useEffect } from 'react'

// TODO: color by correct / wrong
const Answer = (props) => {
	// TODO: find an other way to do it
	useEffect(() => {
		const node = document.getElementById(props.id)
		const correctTransition = ['transition-color', 'bg-green-600']
		const wrongTransition = ['transition-color', 'bg-orange-600']
		if (props.correct) {
			node.classList.add(...correctTransition)
		} else {
			node.classList.add(...wrongTransition)
		}
		node.classList.remove(...correctTransition, ...wrongTransition)
	}, [props])

	return (
		<button
			id={props.id}
			className="block w-full bg-gray-900 hover:bg-gray-800 mx-2 my-3 py-5 px-5 rounded-md cursor-pointer"
			onClick={props.onClick}
			disabled={props.disabled}
		>
			<span className="text-lg md:text-xl text-gray-300 text-center">
				{props.value}
			</span>
		</button>
	)
}

export default Answer
