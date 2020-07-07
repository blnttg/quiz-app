import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeQuestion } from '../app/actions'
import QuestionListItem from '../components/QuestionListItem'
import { QuestionForm } from './QuestionForm'
import BackButton from '../components/BackButton'
import { animateCSS } from '../utils'

const Editor = () => {
	const questions = useSelector((state) => state.questionStore)
	const dispatch = useDispatch()

	const handleDelete = (id) =>
		animateCSS(`#id-${id}`, 'backOutRight', null, 2).then(
			dispatch(removeQuestion(id))
		)

	return (
		<div className="flex flex-col mx-auto w-full max-w-4xl">
			<div className="flex items-center py-2">
				<BackButton />
				<h1 className="text-2xl md:text-3xl text-gray-800 font-bold m-1 py-2 px-1">
					Question Manager
				</h1>
			</div>
			{questions.map((question) => {
				return (
					<QuestionListItem
						key={question.id}
						id={`id-${question.id}`}
						question={question.question}
						correct={question.correct}
						rest={question.answers.filter(
							(q) => q !== question.correct
						)}
						onDelete={() => handleDelete(question.id)}
					/>
				)
			})}
			<QuestionForm />
		</div>
	)
}

export default Editor
