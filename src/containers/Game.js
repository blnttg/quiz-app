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
	const [firstQuestion, setFirstQuestion] = useState(true)

	const correctTransition = ['transition', 'bg-green-600']
	const wrongTransition = ['transition', 'bg-orange-600']

	const toggleDisableHover = (parentSelector, toggle) => {
		const hoverBgColor = 'hover:bg-purple-900'
		const answerNodes = document.querySelector(parentSelector).childNodes

		for (let i = 0; i < answerNodes.length; i++) {
			const answerNode = answerNodes[i]
			if (toggle) {
				answerNode.classList.add(hoverBgColor)
			} else {
				answerNode.classList.remove(hoverBgColor)
			}
		}
	}

	const setCorrectAndWrongAnswers = (selector, correct) => {
		const node = document.querySelector(selector)
		if (correct) {
			node.classList.add(...correctTransition)
		} else {
			node.classList.add(...wrongTransition)
		}
	}

	const resetCorrectAndWrongAnswers = (parentSelector) => {
		const answerNodes = document.querySelector(parentSelector).childNodes
		for (let i = 0; i < answerNodes.length; i++) {
			const answerNode = answerNodes[i]
			answerNode.classList.remove(
				...correctTransition,
				...wrongTransition
			)
		}
	}

	const handleChoice = (index) => {
		const answers = questions[questionID].answers
		const correct = questions[questionID].correct
		const choiceSelector = `#answer${index}`
		const correctSelector = `#answer${answers.indexOf(correct)}`
		if (answers[index] === questions[questionID].correct) {
			animateCSS(choiceSelector, 'flash', 'slow').then(() => {
				setCorrectAndWrongAnswers(choiceSelector, true)
				dispatch(addScore())
			})
		} else {
			animateCSS(choiceSelector, 'flash', 'slow').then(() => {
				animateCSS(correctSelector, 'pulse', 'fast')
				setCorrectAndWrongAnswers(correctSelector, true)
				setCorrectAndWrongAnswers(choiceSelector, false)
			})
		}
		setAnswered(true)
		toggleDisableHover('#answers', answered)
		animateCSS('#next', 'fadeIn', 'slower', 2)
	}

	const handleNextMove = () => {
		animateCSS('#gameArea', 'fadeOut', 'faster')
		setAnswered(false)
		toggleDisableHover('#answers', answered)

		if (questionID < questions.length - 1) {
			resetCorrectAndWrongAnswers('#answers')
			setQuestionID(questionID + 1)
			animateCSS('#question', 'lightSpeedInLeft')
			animateCSS('#answers', 'fadeIn', null, 2)
		} else {
			navigate('/finish')
			setAnswered(true)
		}
	}

	useEffect(() => {
		if (player !== '' && Array.isArray(questions) && questions.length) {
			setFirstQuestion(false)
			dispatch(resetScore())
			animateCSS('#question', 'lightSpeedInLeft')
			animateCSS('#answers', 'fadeIn', null, 2)
		} else {
			navigate('/')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="flex flex-col items-center justify-center w-full h-screen select-none">
			{!firstQuestion && (
				<GameHeader
					id="gameHeader"
					player={player}
					score={score}
					completed={((questionID + 1) / questions.length) * 100}
				/>
			)}
			<div
				id="gameArea"
				className={`flex flex-col items-center justify-center w-full h-full ${
					firstQuestion ? 'invisible' : 'visible'
				}`}
			>
				{questions && questions[questionID] && (
					<Question
						id="question"
						value={questions[questionID].question}
					/>
				)}
				<div
					id="answers"
					className="flex flex-col items-center w-full px-3 max-w-3xl"
				>
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
				<div id="next">
					<Button
						onClick={() => handleNextMove()}
						invisible={!answered}
					>
						{questionID === questions.length - 1
							? 'Finish'
							: 'Next'}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Game
