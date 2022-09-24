import React from 'react'
import styles from './WorkBlock.module.sass'

export const WorkBlock = ({ title, img, tags, url }) => {
	return (
		<div className={styles.wrapper}>
			<div
				onClick={() => window.open(url)}
				style={{ background: `url(${img}) center no-repeat` }}
				className={styles.block}
			>
				<div className={styles.title}>{title}</div>
				<div className={styles.tags}>
					{tags.map((val, index) => (
						<span key={index}>
							<img src={val.img} alt='Vue' />
							{val.text}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}
