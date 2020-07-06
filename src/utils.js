// TODO: cleanup

import { useState } from 'react'

export const loadState = (key) => localStorage.getItem(key) || undefined

export const saveState = (key, state) => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem(key, serializedState)
	} catch (err) {
		console.log(err)
	}
}

// Fisher-Yates Algorithm
export const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i)
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
	return array
}

export const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue)

	return {
		value,
		onChange: (e) => setValue(e.target.value),
	}
}

export const animateCSS = (element, animation, duration, delay) => {
	const prefix = 'animate__'

	// We create a Promise and return it
	return new Promise((resolve, reject) => {
		const animationName = `${prefix}${animation}`
		const animationDuration = `${prefix}${duration}`
		const animationDelay = `${prefix}delay-${delay}s`
		const node = document.querySelector(element)

		node.classList.add(
			`${prefix}animated`,
			animationName,
			duration && animationDuration,
			delay && animationDelay
		)

		// node.style.setProperty('--animate-delay', `${delay}s`)

		// When the animation ends, we clean the classes and resolve the Promise
		const handleAnimationEnd = () => {
			node.classList.remove(`${prefix}animated`, animationName)
			node.removeEventListener('animationend', handleAnimationEnd)

			resolve('Animation ended')
		}

		node.addEventListener('animationend', handleAnimationEnd)
	})
}
