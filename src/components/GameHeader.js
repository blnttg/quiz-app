import React, { useEffect, useState } from 'react'
import { animateCSS, usePrevious } from '../utils'

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
	// const [completed, setCompleted] = useState(props.completed)
	// const prevProgress = usePrevious(props.completed)

	const style = {
		width: `${props.completed}%`,
	}

	useEffect(() => {
		animateCSS('#progressBar', 'flash', 'fast')
		// TODO: count up animation
	}, [props.completed])

	return (
		<div className="h-2 w-full bg-gray-500 md:rounded-full">
			<div
				id="progressBar"
				style={style}
				className="h-2 bg-purple-800 md:rounded-full"
			></div>
		</div>
	)
}

const GameHeader = (props) => {
	return (
		<div
			id={props.id}
			className="flex flex-col-reverse md:flex-col w-full md:w-auto items-center animate__animated animate__slideInDown animate__fast animate__delay-1s"
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
