import * as actions from './actionTypes'

export function questionReducer(state = [], action) {
	switch (action.type) {
		case actions.QUESTION_ADD:
			return [
				...state,
				{
					id: action.payload.id,
					question: action.payload.question,
					correct: action.payload.correct,
					answers: [action.payload.correct, ...action.payload.rest],
				},
			]
		case actions.QUESTION_REMOVE:
			return state.filter((question) => question.id !== action.payload.id)
		default:
			return state
	}
}
