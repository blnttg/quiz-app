import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditableQuestion from '../components/EditableQuestion'
import { removeQuestion, addQuestion } from '../app/actions'
import InputText from '../components/InputText'
import Button from '../components/Button'

const useInputValue = (initialValue) => {
	const [value, setValue] = useState(initialValue)

	return {
		value,
		onChange: (e) => setValue(e.target.value),
	}
}

const Editor = (props) => {
	const questions = useSelector((state) => state.questionStore)
	const dispatch = useDispatch()

	const questionInput = useInputValue('')
	const correctAnswerInput = useInputValue('')
	const wrongAnswer1Input = useInputValue('')
	const wrongAnswer2Input = useInputValue('')
	const wrongAnswer3Input = useInputValue('')

	const showAnswers = (id) => {}

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
		}
	}

	return (
		<div>
			{questions.map((question) => {
				return (
					<EditableQuestion
						key={question.id}
						question={question.question}
						correct={question.correct}
						rest={question.answers.filter(
							(q) => q !== question.correct
						)}
						onDelete={() => dispatch(removeQuestion(question.id))}
						onClick={() => showAnswers(question.id)}
					/>
				)
			})}
			<div className="flex flex-col">
				<InputText label="Question" {...questionInput} />
				<InputText label="Correct Answer" {...correctAnswerInput} />
				<InputText label="Wrong Answer #1" {...wrongAnswer1Input} />
				<InputText label="Wrong Answer #2" {...wrongAnswer2Input} />
				<InputText label="Wrong Answer #3" {...wrongAnswer3Input} />
				<Button onClick={() => handleAddQuestion()}>Add</Button>
			</div>
		</div>
	)
}

export default Editor
