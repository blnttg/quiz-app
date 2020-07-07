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

// FIXME: fix progress bar
const ProgressBar = (props) => {
	const [completed, setCompleted] = useState(props.completed)
	const prevProgress = usePrevious(props.completed)

	const style = {
		width: `${completed}%`,
	}

	useEffect(() => {
		// animateCSS('#progressBar', 'flash', 'fast')
		// TODO: count up animation
	}, [])

	return (
		<div className="h-2 w-full bg-gray-500 rounded-full">
			<div
				id="progressBar"
				style={style}
				className="h-2 bg-purple-800 rounded-full"
			></div>
		</div>
	)
}

const GameHeader = (props) => {
	return (
		<div
			id={props.id}
			className="flex flex-col items-center animate__animated animate__slideInDown animate__fast animate__delay-1s"
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
