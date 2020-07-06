import React from 'react'

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

const GameHeader = (props) => {
	return (
		<div className="flex items-center justify-around">
			<HeaderItem name="player" value={props.player} />
			<HeaderItem name="score" value={props.score} />
		</div>
	)
}

export default GameHeader
