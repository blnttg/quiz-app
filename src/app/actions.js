import * as actions from './actionTypes'

export const addQuestion = (question, correct, rest) => ({
	type: actions.QUESTION_ADD,
	payload: {
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

export const addScore = () => ({
	type: actions.SCORE_ADD,
})

export const resetScore = () => ({
	type: actions.SCORE_RESET,
})

export const setPlayer = (player) => ({
	type: actions.SET_PLAYER,
	payload: {
		player,
	},
})
