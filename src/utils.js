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

export const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue)

	return {
		value,
		onChange: (e) => setValue(e.target.value),
		resetValue: () => setValue(initialValue || ''),
	}
}

export const usePrevious = (value) => {
	const ref = useRef()
	useEffect(() => {
		ref.current = value
	})
	return ref.current
}
// TODO: fix this
// const useAnimateValue = (start, end) => {
// 	const range = end - start
// 	const [current, setCurrent] = useState(start)
// 	let stepTime = Math.abs(Math.floor(1000 / range))
// 	const timer = setInterval(() => {
// 		setCurrent(current + end > start ? 1 : -1)

// 		if (current === end) {
// 			clearInterval(timer)
// 		}
// 	}, stepTime)
// }

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
