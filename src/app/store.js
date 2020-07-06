import { createStore, combineReducers } from 'redux'
import { questionReducer, gameReducer } from './reducers'

// TODO: move to utils (or not)
const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state')
		if (!serializedState) return undefined
		else return JSON.parse(serializedState)
	} catch (err) {
		return undefined
	}
}

const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state', serializedState)
	} catch (err) {
		console.log(err)
	}
}

const persistedStore = loadState()

const rootReducer = combineReducers({
	questionStore: questionReducer,
	gameStore: gameReducer,
})

const store = createStore(rootReducer, persistedStore)

store.subscribe(() => saveState(store.getState()))

export default store
