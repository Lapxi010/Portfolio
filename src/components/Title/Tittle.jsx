import React from 'react'
import styles from './Title.module.sass'

export const Tittle = ({ text }) => {
	return (
		<>
			<div className={styles.title}>{text}</div>
		</>
	)
}
