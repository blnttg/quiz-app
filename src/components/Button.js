import React from 'react'

const Button = (props) => {
	return (
		<button
			className="bg-gray-500 hover:bg-gray-600 m-2 py-3 px-4 rounded-lg cursor-pointer"
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
