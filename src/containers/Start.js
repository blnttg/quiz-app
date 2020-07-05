import React from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button'
import { navigate } from '@reach/router'
import { shuffle, useInput } from '../utils'

const Start = (props) => {
	const playerInput = useInput('')

	const handlePlay = () => {
		if (playerInput.value !== '') {
			navigate('/play')
		}
	}

	return (
		<div className="flex flex-col items-center justify-center w-full h-screen">
			<h1 className="text-6xl font-black italic text-purple-700">
				Quiz!
			</h1>
			<div className="max-w-2xl">
				<InputText
					{...playerInput}
					placeholder={
						shuffle([
							'your awesome name',
							'the best name ever',
							'just type some letters here',
						])[0]
					}
				/>
				<Button onClick={() => handlePlay()}>Play</Button>
				<Button onClick={() => navigate('/questions')}>
					Manage Questions
				</Button>
			</div>
		</div>
	)
}

export default Start
