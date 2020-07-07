import React from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button'
import { navigate } from '@reach/router'
import { shuffle, useInput, animateCSS, useInputValue } from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import { setPlayer } from '../app/actions'

const Start = () => {
	const dispatch = useDispatch()
	const [playerInput, resetPlayerInput] = useInputValue('')
	const questions = useSelector((state) => state.questionStore)

	const handlePlay = () => {
		const inputValue = playerInput.value.replace(/ /g, '')
		if (questions.length === 0) {
			animateCSS('#editorButton', 'headShake', 'fast')
		}
		if (inputValue === '' || inputValue.length > 16) {
			animateCSS('#input', 'headShake', 'fast')
		}
		if (
			inputValue !== '' &&
			inputValue.length <= 16 &&
			questions.length !== 0
		) {
			dispatch(setPlayer(inputValue))
			navigate('/play')
		}
	}

	return (
		<div className="flex flex-col items-center justify-center w-full h-screen animate__animated animate__fadeIn animate__faster">
			<h1 className="text-6xl font-black italic text-purple-700">
				Quiz!
			</h1>
			<div className="max-w-2xl">
				<InputText
					id="input"
					{...playerInput}
					placeholder={
						shuffle([
							'your beautiful name',
							'the best nickname',
							'an awesome name',
						])[0]
					}
				/>
				<Button id="playButton" onClick={() => handlePlay()}>
					Play
				</Button>
				<Button
					id="editorButton"
					onClick={() => navigate('/questions')}
				>
					Manage Questions
				</Button>
			</div>
		</div>
	)
}

export default Start
