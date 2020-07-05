import React, { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addScore } from '../app/actions'
import Question from '../components/Question'
import Answer from '../components/Answer'
import Button from '../components/Button'

// Fisher-Yates Algorithm
const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i)
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
	return array
}

// TODO: clean up the code
const Game = (props) => {
	const score = useSelector((state) => state.gameStore.current.score)
	const questions = useSelector((state) => state.questionStore)
	const dispatch = useDispatch()
	const [questionID, setQuestionID] = useState(0)
	const [answered, setAnswered] = useState(false)

	const shuffledQuestions = useMemo(() => {
		return shuffle(questions)
	}, [questions])
	const currentQuestion = shuffledQuestions[questionID].question

	const _currentAnswers = shuffledQuestions[questionID].answers
	const currentAnswers = useMemo(() => {
		return shuffle(_currentAnswers)
	}, [_currentAnswers])

	const handleChoice = (value) => {
		if (value === shuffledQuestions[questionID].correct) {
			dispatch(addScore())
			console.log('good one')
		} else {
			console.log('wrong')
		}
		setAnswered(true)
	}

	const handleNextMove = () => {
		setAnswered(false)
		if (questionID < shuffledQuestions.length - 1) {
			setQuestionID(questionID + 1)
		} else {
			console.log('no more question')
		}
	}

	return (
		<div className="flex flex-col justify-content items-center w-full d:w-11/12 select-none">
			{/* TODO: bring the question progress here */}
			<p className="m-1 p-1 text-xl text-gray-600 font-bold">
				score: <span className="text-gray-700">{score}</span>
			</p>
			<Question
				currentIndex={questionID + 1}
				numOfQuestions={shuffledQuestions.length}
				value={currentQuestion}
			/>
			<div className="w-5/6 md:w-4/6">
				{currentAnswers.map((value, index) => (
					<Answer
						key={index}
						value={value}
						onClick={() => !answered && handleChoice(value)}
					/>
				))}
			</div>
			{answered && (
				<div className="max-w-2xl">
					<Button onClick={() => handleNextMove()}>
						{questionID === shuffledQuestions.length - 1
							? 'Finish'
							: 'Next'}
					</Button>
				</div>
			)}
		</div>
	)
}

export default Game
