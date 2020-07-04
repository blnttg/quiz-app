import { createStore, combineReducers } from 'redux'
import { questionReducer } from './reducers'

const rootReducer = combineReducers({
	questionStore: questionReducer,
})

const store = createStore(rootReducer)

export default store
