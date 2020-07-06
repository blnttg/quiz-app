import React, { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { navigate } from '@reach/router'
import { addScore, resetScore } from '../app/actions'
import Question from '../components/Question'
import Answer from '../components/Answer'
import Button from '../components/Button'
import { animateCSS, shuffle } from '../utils'
import GameHeader from '../components/GameHeader'

// TODO: clean up the code
// TODO: save highscore (optional)
const Game = () => {
	const { score, player } = useSelector((state) => state.gameStore.current)
	const _questions = useSelector((state) => state.questionStore)
	const questions = useMemo(
		() =>
			shuffle(
				_questions.map((question) => ({
					...question,
					answers: shuffle(question.answers),
				}))
			),
		[_questions]
	)

	const dispatch = useDispatch()
	const [questionID, setQuestionID] = useState(0)
	const [answered, setAnswered] = useState(false)

	const initializeGame = () => {
		dispatch(resetScore())
		console.log('init')
	}

	const setCorrectAndWrongAnswers = (node, correct) => {
		const correctTransition = ['transition', 'bg-green-600']
		const wrongTransition = ['transition', 'bg-orange-600']

		// const node = document.querySelector(element)

		// if (removeTransition) {
		// 	node.classList.remove(...correctTransition, ...wrongTransition)
		// 	return
		// }

		if (correct) {
			node.classList.add(...correctTransition)
		} else {
			node.classList.add(...wrongTransition)
		}
	}

	// FIXME: show correct (and wrong answer) with animation
	const handleChoice = (index) => {
		const answers = questions[questionID].answers
		const correct = questions[questionID].correct
		const selectedElement = document.querySelector(`#answer${index}`)
		const correctElement = document.querySelector(
			`#answer${answers.indexOf(correct)}`
		)
		// correctElement.classList.add(...correctTransition)
		if (answers[index] === questions[questionID].correct) {
			setCorrectAndWrongAnswers(correctElement, true)
			// selectedElement.classList.add('bg-green-600')
			animateCSS(`#answer${index}`, 'flash', 'slow').then(() => {
				// selectedElement.classList.remove('bg-green-600')
				dispatch(addScore())
			})
			// console.log('good one')
		} else {
			setCorrectAndWrongAnswers(selectedElement, false)
			// animateCSS(`#answer${answers.indexOf(correct)}`, 'flash')
			// correctElement.classList.add('bg-green-600')
			// selectedElement.classList.add('bg-orange-600')
		}
		setAnswered(true)
	}

	const handleNextMove = () => {
		setAnswered(false)
		if (questionID < questions.length - 1) {
			setQuestionID(questionID + 1)
			// questions[questionID].answers.forEach((x, index) =>
			// 	setCorrectAndWrongAnswers(`#answer${index}`, null, true)
			// )
			animateCSS('#question', 'lightSpeedInLeft')
			animateCSS('#answers', 'fadeIn', null, 2)
		} else {
			navigate('/finish')
			setAnswered(true)
		}
	}

	useEffect(() => {
		if (player !== '' && Array.isArray(questions) && questions.length) {
			// FIXME: hide before animation
			initializeGame()
			animateCSS('#question', 'lightSpeedInLeft')
			animateCSS('#answers', 'fadeIn', null, 2)
		} else {
			navigate('/')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="flex flex-col items-center w-full h-screen select-none">
			<GameHeader player={player} score={score} />
			<div className="flex flex-col items-center justify-center w-full h-full">
				{questions && questions[questionID] && (
					<Question
						id="question"
						value={questions[questionID].question}
					/>
				)}
				<div id="answers" className="w-5/6 md:w-4/6">
					{questions &&
						questions[questionID] &&
						questions[questionID].answers.map((value, index) => (
							<Answer
								id={`answer${index}`}
								key={index}
								value={value}
								disabled={answered}
								onClick={() => !answered && handleChoice(index)}
							/>
						))}
				</div>
				{/*  TODO: better fade in */}
				{answered && (
					<div
						id="next"
						className="max-w-2xl animate__animated animate__fadeIn"
					>
						<Button onClick={() => handleNextMove()}>
							{questionID === questions.length - 1
								? 'Finish'
								: 'Next'}
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Game
