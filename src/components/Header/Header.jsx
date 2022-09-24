import React from 'react'
import styles from './Header.module.sass'
import { Link, useLocation } from 'react-router-dom'
import GitHubIcon from '@images/icons/GitHub.svg'

export const Header = () => {
	const location = useLocation()

	return (
		<>
			<header className={styles.wrapper_header}>
				<div className={styles.header}>
					<p className={styles.title}>LAPXI</p>
					<ul className={styles.navbar}>
						<li>
							<Link
								to={'/'}
								className={
									location.pathname === '/' ? styles.active : styles.navbar_link
								}
								href='#'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to={'/works'}
								className={
									location.pathname === '/works'
										? styles.active
										: styles.navbar_link
								}
								href='#'
							>
								Works
							</Link>
						</li>
						<li>
							<Link
								to={'/feedback'}
								className={
									location.pathname === '/feedback'
										? styles.active
										: styles.navbar_link
								}
								href='#'
							>
								Feedback
							</Link>
						</li>
					</ul>
					<a
						href='https://github.com/Lapxi010'
						target='_blank'
						className={styles.btn_GitHub}
					>
						<img src={GitHubIcon} alt='GitHub' />
						<p>GitHub</p>
					</a>
				</div>
			</header>
		</>
	)
}
