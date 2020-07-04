import * as actions from './actionTypes'

let questionID = 0

export const addQuestion = (question, correct, rest) => ({
	type: actions.QUESTION_ADD,
	payload: {
		id: questionID++,
		question,
		correct,
		rest,
	},
})

export const removeQuestion = (id) => ({
	type: actions.QUESTION_REMOVE,
	payload: {
		id,
	},
})
