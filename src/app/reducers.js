import * as actions from './actionTypes'
import { v4 as uuidv4 } from 'uuid'

export const questionReducer = (state = [], action) => {
	switch (action.type) {
		case actions.QUESTION_ADD:
			return [
				...state,
				{
					id: uuidv4(),
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
		player: '',
		score: 0,
	},
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
		case actions.SCORE_RESET:
			return {
				...state,
				current: {
					...state.current,
					score: 0,
				},
			}
		default:
			return state
	}
}
