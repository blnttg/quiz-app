import React from 'react'
import ReactDOM from 'react-dom'
import './assets/main.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './app/store'

// import { addQuestion, removeQuestion } from './app/actions'
// store.dispatch(addQuestion('???1', 'good one', ['these', 'are', 'wrong']))
// store.dispatch(addQuestion('???2', 'good one', ['these', 'are', 'wrong']))
// store.dispatch(removeQuestion(0))
// console.log(store.getState())

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
