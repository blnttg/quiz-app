import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addQuestion } from '../app/actions'
import InputText from '../components/InputText'
import Button from '../components/Button'
import { animateCSS } from '../utils'

const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue)

	return {
		value,
		onChange: (e) => setValue(e.target.value),
	}
}

export const QuestionForm = () => {
	const dispatch = useDispatch()

	const questionInput = useInput('')
	const correctAnswerInput = useInput('')
	const wrongAnswer1Input = useInput('')
	const wrongAnswer2Input = useInput('')
	const wrongAnswer3Input = useInput('')

	// TODO: reset values after submit
	const resetInputs = () => {
		questionInput.resetValue()
	}

	const handleAddQuestion = () => {
		const answers = [
			correctAnswerInput.value,
			wrongAnswer1Input.value,
			wrongAnswer2Input.value,
			wrongAnswer3Input.value,
		]
		if (
			questionInput.value !== '' &&
			!answers.includes('') &&
			new Set(answers).size === answers.length
		) {
			dispatch(
				addQuestion(
					questionInput.value,
					correctAnswerInput.value,
					answers.slice(1, answers.length)
				)
			)
			// resetValue()
			// questionInput.resetValue()
			// resetInputs()
		} else {
			animateCSS('#form', 'headShake', 'fast')
			console.log('shakee')
		}
	}

	useEffect(() => animateCSS('#form', 'bounceInUp', 'fast', 1), [])

	return (
		<div
			id="form"
			className="flex flex-col mx-1 my-2 p-3 rounded-lg border-2 border-gray-400"
		>
			<h2 className="md:m-1 py-2 px-1 text-xl md:text-2xl font-bold text-gray-800">
				Add a new question!
			</h2>
			<InputText label="Question" {...questionInput} />
			<div className="w-full md:w-2/5">
				<InputText label="Correct Answer" {...correctAnswerInput} />
				<InputText label="Wrong Answer #1" {...wrongAnswer1Input} />
				<InputText label="Wrong Answer #2" {...wrongAnswer2Input} />
				<InputText label="Wrong Answer #3" {...wrongAnswer3Input} />
			</div>
			<Button onClick={() => handleAddQuestion()}>Add</Button>
		</div>
	)
}
