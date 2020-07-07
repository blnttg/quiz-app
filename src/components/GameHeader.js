import React, { useEffect } from 'react'
import { animateCSS } from '../utils'

const HeaderItem = (props) => {
	return (
		<p className="m-1 p-1 text-xl text-gray-600 font-bold">
			{props.name}:{' '}
			<span id="score" className="text-gray-700">
				{props.value}
			</span>
		</p>
	)
}

const ProgressBar = (props) => {
	useEffect(() => {
		animateCSS('#progressBar', 'flash', 'fast')
	}, [props.completed])

	return (
		<div className="h-2 w-full bg-gray-500 md:rounded-full">
			<div
				id="progressBar"
				style={{ width: `${props.completed}%` }}
				className="h-2 bg-purple-800 md:rounded-full"
			></div>
		</div>
	)
}

const GameHeader = (props) => {
	return (
		<div
			id={props.id}
			className="absolute top-0 flex flex-col-reverse md:flex-col w-full md:w-auto items-center animate__animated animate__slideInDown animate__fast animate__delay-1s"
		>
			<div className="flex items-center justify-around">
				<HeaderItem name="player" value={props.player} />
				<HeaderItem name="score" value={props.score} />
			</div>
			<ProgressBar completed={props.completed} />
		</div>
	)
}

export default GameHeader
