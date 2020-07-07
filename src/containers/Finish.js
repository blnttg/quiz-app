import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'
import Button from '../components/Button'

const Finish = () => {
	const { player, score } = useSelector((state) => state.gameStore.current)

	useEffect(() => {
		if (player === '') {
			navigate('/')
		}
	})

	return (
		<div className="flex flex-col items-center justify-center mx-auto w-full h-screen max-w-4xl animate__animated animate__fadeIn animate__faster">
			<h2 className="text-3xl md:text-4xl text-gray-700 font-bold m-1 py-2 px-1">
				Game over, <span className="text-purple-600">{player}</span>!
			</h2>
			<p className="text-gray-600 text-xl md:text-2xl font-bold">
				score: <span className="text-gray-700">{score}</span>
			</p>
			<div className="py-2">
				<Button onClick={() => navigate('/')}>Play Again</Button>
			</div>
		</div>
	)
}

export default Finish
