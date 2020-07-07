import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addQuestion } from '../app/actions'
import { animateCSS, useInputValue } from '../utils'
import InputText from '../components/InputText'
import Button from '../components/Button'

export const QuestionForm = () => {
	const dispatch = useDispatch()

	const [questionInput, resetQuestionInput] = useInputValue('')
	const [correctAnswerInput, resetCorrectAnswerInput] = useInputValue('')
	const [wrongAnswer1Input, resetWrongAnswer1Input] = useInputValue('')
	const [wrongAnswer2Input, resetWrongAnswer2Input] = useInputValue('')
	const [wrongAnswer3Input, resetWrongAnswer3Input] = useInputValue('')

	const resetInputs = () => {
		resetQuestionInput()
		resetCorrectAnswerInput()
		resetWrongAnswer1Input()
		resetWrongAnswer2Input()
		resetWrongAnswer3Input()
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
			resetInputs()
		} else {
			animateCSS('#form', 'headShake', 'fast')
		}
	}

	useEffect(() => {
		const animate = async () =>
			await animateCSS('#form', 'bounceInUp', 'fast', 1)
		document.querySelector('#form').classList.remove('invisible')
		animate()
	}, [])

	return (
		<div
			id="form"
			className="flex flex-col mx-1 my-2 p-3 rounded-lg border-2 border-gray-400 invisible"
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
