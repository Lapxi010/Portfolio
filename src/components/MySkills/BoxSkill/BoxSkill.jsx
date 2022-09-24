import React, { useState } from 'react'
import styles from './BoxSkill.module.sass'

export const BoxSkill = ({ TitleT, img, TextT, Back }) => {
	const [flag, setflag] = useState(true)

	let theory = 89 * (Back.theory / 1000)
	let practice = 89 * (Back.practice / 1000)

	return (
		<>
			<div className={styles.box_skill_wrapper}>
				<div className={styles.box_skill}>
					{flag ? (
						<>
							<p className={styles.box_skill_title}>{TitleT}</p>
							<img width={'57px'} height={'56px'} src={img} alt='Technology' />
							<p className={styles.text}>{TextT}</p>
						</>
					) : (
						<>
							<p className={styles.box_skill_title}>Experience</p>
							<pre className={styles.box_skill_pre}>Теория</pre>
							<div className={styles.box_skill_exp}>
								{Back.theory} ч.{' '}
								<div className={styles.box_skill_exp__line}>
									<div
										style={{ background: '#AD5AFF', width: theory + '%' }}
										className={styles.box_skill_exp__line_fill}
									></div>
								</div>
							</div>
							<pre className={styles.box_skill_pre}>Практика</pre>
							<div className={styles.box_skill_exp}>
								{Back.practice} ч.{' '}
								<div className={styles.box_skill_exp__line}>
									<div
										style={{ width: practice + '%' }}
										className={styles.box_skill_exp__line_fill}
									></div>
								</div>
							</div>
							<p className={styles.text}>{Back.text}</p>
						</>
					)}

					<button
						onClick={() => {
							setflag(!flag)
						}}
						className={styles.btn_switch}
					>
						{flag ? 'Подробнее' : 'Обратно'}
					</button>
				</div>
			</div>
		</>
	)
}
