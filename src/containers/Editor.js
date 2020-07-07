import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeQuestion } from '../app/actions'
import QuestionListItem from '../components/QuestionListItem'
import { QuestionForm } from './QuestionForm'
import BackButton from '../components/BackButton'

const Editor = () => {
	const questions = useSelector((state) => state.questionStore)
	const dispatch = useDispatch()

	useEffect(() => window.scrollTo(0, 0), [])

	return (
		<div className="flex flex-col mx-auto w-full max-w-4xl animate__animated animate__fadeIn animate__faster">
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
						onDelete={() => dispatch(removeQuestion(question.id))}
					/>
				)
			})}
			<QuestionForm />
		</div>
	)
}

export default Editor
