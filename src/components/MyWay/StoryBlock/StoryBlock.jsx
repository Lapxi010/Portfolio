import React, { useState } from 'react'
import styles from './StoryBlock.module.sass'

export const StoryBlock = ({ top, title, text }) => {
	const randomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	const [count, setCount] = useState(0)
	const [randomN, setrandomN] = useState(randomNumber(0, 3))

	const colors = ['#00e7ff', '#10ff00', '#ff8d00', '#ff00f7']
	let textT = text || []

	return (
		<>
			<div className={styles.story} style={{ marginTop: top + 'px' }}>
				<div className={styles.title}>{title}</div>
				<div className={styles.box}>
					<p className={styles.count_lists}>
						<span style={{ color: colors[randomN] }}>{count + 1}</span>/
						{textT.length}
					</p>
					<p className={styles.text}>{textT[count]}</p>
					{count === textT.length - 1 ? (
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<button
								onClick={() => {
									setCount(0)
									setrandomN(randomNumber(0, 3))
								}}
								style={{ background: '#ffffff' }}
								className={styles.btn_switch_end}
							>
								С начала
							</button>
							<button
								onClick={() => {
									setCount(count - 1)
									setrandomN(randomNumber(0, 3))
								}}
								className={styles.btn_switch_end}
							>
								Назад
							</button>
						</div>
					) : count !== 0 ? (
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<button
								onClick={() => {
									setCount(count + 1)
									setrandomN(randomNumber(0, 3))
								}}
								className={styles.btn_switch_end}
							>
								Ещё
							</button>
							<button
								onClick={() => {
									setCount(count - 1)
									setrandomN(randomNumber(0, 3))
								}}
								className={styles.btn_switch_end}
							>
								Назад
							</button>
						</div>
					) : (
						<button
							onClick={() => {
								setCount(count + 1)
								setrandomN(randomNumber(0, 3))
							}}
							className={styles.btn_switch}
						>
							Ещё
						</button>
					)}
				</div>
			</div>
		</>
	)
}
