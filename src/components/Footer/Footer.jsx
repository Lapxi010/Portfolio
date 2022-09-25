import React from 'react'
import styles from './Footer.module.sass'
import ArrowUp_icon from '@images/icons/Arrow_Up.svg'

export const Footer = () => {
	const scroll = e => {
		e.preventDefault()
		window.scroll({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.arrow_wrapper}>
					<div className={styles.arrow_block}>
						<a href='#' style={{ marginLeft: '15px' }}>
							<img onClick={scroll} src={ArrowUp_icon} alt='arrow' />
						</a>
						<a onClick={scroll} className={styles.up} href='#'>
							Вверх
						</a>
					</div>
				</div>
				<div className={styles.copyright_block}>
					<p>Copyright 2022 @ by Lapxi</p>
				</div>
			</footer>
		</>
	)
}
