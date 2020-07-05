import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addQuestion } from '../app/actions'
import InputText from '../components/InputText'
import Button from '../components/Button'

const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue)

	return {
		value,
		onChange: (e) => setValue(e.target.value),
	}
}

// FIXME: better structuring
export const QuestionForm = () => {
	const dispatch = useDispatch()

	const questionInput = useInput('')
	const correctAnswerInput = useInput('')
	const wrongAnswer1Input = useInput('')
	const wrongAnswer2Input = useInput('')
	const wrongAnswer3Input = useInput('')

	const handleAddQuestion = () => {
		const answers = [
			correctAnswerInput.value,
			wrongAnswer1Input.value,
			wrongAnswer2Input.value,
			wrongAnswer3Input.value,
		]
		console.log('handling')
		if (!answers.includes('')) {
			console.log('added')
			dispatch(
				addQuestion(
					questionInput.value,
					answers[0],
					answers.slice(1, answers.length)
				)
			)
			questionInput.value = ''
		}
	}

	return (
		<div className="flex flex-col m-1 p-3 rounded-lg border-2 border-gray-400">
			<h2 className="m-1 p-1 text-2xl font-bold text-gray-800">
				Add a new question!
			</h2>
			<InputText label="Question" {...questionInput} />
			<div className="w-2/5">
				<InputText label="Correct Answer" {...correctAnswerInput} />
				<InputText label="Wrong Answer #1" {...wrongAnswer1Input} />
				<InputText label="Wrong Answer #2" {...wrongAnswer2Input} />
				<InputText label="Wrong Answer #3" {...wrongAnswer3Input} />
			</div>
			<Button onClick={() => handleAddQuestion()}>Add</Button>
		</div>
	)
}
