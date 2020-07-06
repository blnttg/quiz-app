import React from 'react'

const Button = (props) => {
	return (
		<button
			id={props.id}
			className="w-full mx-1 my-2 py-3 px-4 bg-gray-500 hover:bg-gray-600 rounded-lg cursor-pointer"
			onClick={props.onClick}
			onSubmit={props.onSubmit}
		>
			<span className="text-lg text-gray-100 font-semibold text-center">
				{props.children}
			</span>
		</button>
	)
}

export default Button
