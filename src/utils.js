import { useState, useEffect, useRef, useCallback } from 'react'

export const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i)
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
	return array
}

export const useInputValue = (initialValue) => {
	const [value, setValue] = useState(initialValue)

	const bind = {
		value,
		onChange: (e) => setValue(e.target.value),
	}
	const resetValue = () => setValue(initialValue || '')

	return [bind, resetValue]
}

export const usePrevious = (value) => {
	const ref = useRef()
	useEffect(() => {
		ref.current = value
	})
	return ref.current
}

export const animateCSS = (element, animation, duration, delay) => {
	const prefix = 'animate__'

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

		const handleAnimationEnd = () => {
			node.classList.remove(
				`${prefix}animated`,
				animationName,
				animationDuration,
				animationDelay
			)
			node.removeEventListener('animationend', handleAnimationEnd)

			resolve('Animation ended')
		}

		node.addEventListener('animationend', handleAnimationEnd)
	})
}
