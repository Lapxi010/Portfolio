import React from 'react'
import styles from './About.module.sass'
import Vk_icon from '@images/icons/Vk.svg'
import Gmail_icon from '@images/icons/Gmail.svg'
import Telegram_icon from '@images/icons/Telegram.svg'
import { MySkills, MyWay } from '@components'

export const About = () => {
	return (
		<>
			<section className={styles.about_wrapper}>
				<div className={styles.about}>
					<div className={styles.left_side}>
						<div className={styles.image}>
							<img src='#' alt='Avatar' />
						</div>
						<div className={styles.profession}>Frontend developer</div>
						<p className={styles.contact}>Contact with me</p>
						<div
							style={{ width: '120px', margin: '5px auto' }}
							className={styles.line}
						></div>
						<div className={styles.socials}>
							<a href='https://vk.com/vkudrin2017' target='_blank'>
								<img src={Vk_icon} alt='Vk' />
							</a>
							<a href='mailto:Lapxi010@yandex.ru'>
								<img src={Gmail_icon} alt='Gmail' />
							</a>
							<a href='https://t.me/Lapxi010' target='_blank'>
								<img src={Telegram_icon} alt='Telegram' />
							</a>
						</div>
					</div>
					<div className={styles.right_side}>
						<p className={styles.title}>Denisov Nikolay</p>
						<div
							style={{ width: '160px', marginTop: '6px' }}
							className={styles.line}
						></div>
						<p className={styles.city}>From Voronezh</p>
						<p className={styles.text}>
							I am Denisov Nikolay, a young front-end developer from Voronezh,
							who has been constantly learning this craft since 2020. I got
							acquainted with programming in principle in 2018, when I wanted to
							sell my PS Vita game console and then I wanted to do it as quickly
							as possible and for this I wanted to collect all information on
							Avito on advertisements with this console. And then I read an
							article on habr about parsing sites using python.
						</p>
					</div>
				</div>
				<MySkills />
				<MyWay />
			</section>
		</>
	)
}
