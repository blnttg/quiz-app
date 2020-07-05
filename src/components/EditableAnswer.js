import React from 'react'

const EditableAnswer = (props) => {
	return (
		<div
			className="bg-gray-300 hover:bg-gray-400 mx-2 my-3 py-5 px-5 rounded-md cursor-pointer"
			onClick={props.onClick}
		>
			<p className="text-lg md:text-xl text-gray-800 text-center">
				{props.value}
			</p>
		</div>
	)
}

export default EditableAnswer
