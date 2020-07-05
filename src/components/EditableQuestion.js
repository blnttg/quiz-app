import React from 'react'

const EditableQuestion = (props) => {
	return (
		<div
			className="flex items-center justify-between p-3 m-2 bg-gray-300 rounded-lg"
			onClick={props.onClick}
		>
			<div>
				<p className="text-left text-xl md:text-2xl text-gray-700 font-bold">
					{props.question}
				</p>
				<p className="text-lg m-1 font-bold text-green-600">
					{props.correct}
				</p>
				{props.rest.map((answer, index) => (
					<p
						key={index}
						className="text-lg m-1 italic text-orange-600"
					>
						{answer}
					</p>
				))}
			</div>
			<button onClick={props.onDelete}>DEL</button>
		</div>
	)
}

export default EditableQuestion
