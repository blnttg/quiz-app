import React from 'react'

const QuestionListItem = (props) => {
	return (
		<div
			id={props.id}
			className="flex items-center justify-between p-3 mx-1 my-2 bg-gray-300 rounded-lg animate__animated animate__fadeInUp"
			onClick={props.onClick}
		>
			<div>
				<p className="text-left text-lg md:text-2xl text-gray-700 font-bold">
					{props.question}
				</p>
				<p className="text-base md:text-lg m-1 font-bold text-green-600">
					{props.correct}
				</p>
				{props.rest.map((answer, index) => (
					<p
						key={index}
						className="text-base md:text-lg m-1 italic text-orange-600"
					>
						{answer}
					</p>
				))}
			</div>
			<button onClick={props.onDelete}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="w-4 h-4 m-2 fill-current text-gray-700 hover:text-red-700"
				>
					<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
				</svg>
			</button>
		</div>
	)
}

export default QuestionListItem
