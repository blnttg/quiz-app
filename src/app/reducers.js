import * as actions from './actionTypes'

export const questionReducer = (state = [], action) => {
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

const gameInitialState = {
	current: {
		score: 0,
	},
	leaderboard: [],
}

export const gameReducer = (state = gameInitialState, action) => {
	switch (action.type) {
		case actions.SET_PLAYER:
			return {
				...state,
				current: {
					...state.current,
					player: action.payload.player,
				},
			}
		case actions.SCORE_ADD:
			return {
				...state,
				current: {
					...state.current,
					score: state.current.score + 1,
				},
			}
		default:
			return state
	}
}
