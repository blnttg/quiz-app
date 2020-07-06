import React from 'react'
import ReactDOM from 'react-dom'
import './assets/main.css'
import 'animate.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './app/store'
// import { addQuestion } from './app/actions'

// store.dispatch(
// 	addQuestion(
// 		'Which of these U.S. Presidents appeared on the television series Laugh-In?',
// 		'Richard Nixon',
// 		['Lyndon Johnson', 'Jimmy Carter', 'Gerald Ford']
// 	)
// )

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
