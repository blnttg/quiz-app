import { createStore, combineReducers } from 'redux'
import { questionReducer, gameReducer } from './reducers'

const rootReducer = combineReducers({
	questionStore: questionReducer,
	gameStore: gameReducer,
})

const store = createStore(rootReducer)

export default store
