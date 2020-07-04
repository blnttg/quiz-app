import React from 'react'

const Button = (props) => {
	return (
		<button
			className="bg-gray-500 hover:bg-gray-600 m-2 py-2 px-5 rounded-lg cursor-pointer"
			onClick={props.onClick}
		>
			<span className="text-lg md:text-xl text-gray-100 font-semibold text-center">
				{props.children}
			</span>
		</button>
	)
}

export default Button
