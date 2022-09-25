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
							<img src='./images/Avatar.png' alt='Avatar' />
						</div>
						<div className={styles.profession}>Frontend developer</div>
						<p className={styles.contact}>Связь со мной</p>
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
						<p className={styles.title}>Денисов Николай</p>
						<div
							style={{ width: '160px', marginTop: '6px' }}
							className={styles.line}
						></div>
						<p className={styles.city}>Из Воронежа</p>
						<p className={styles.text}>
							Я Денисов Николай, молодой фронтенд-разработчик из Воронежа,
							который постоянно учится этому ремеслу с 2020 года. Познакомился с
							программированием я в 2018 году, когда захотел продать свою
							игровую приставку PS Vita и тогда я хотел сделать это как можно
							быстрее насколько это возможно и для этого мне пришлось
							познакомиться с python. Я спарсил все объявления с ней и,
							проанализировав эти данные, получил оптимальную цену. В итоге я её
							продал, примерно за 4 дня. Учусь я в 10 классе в физмате на
							твердую 4.
						</p>
					</div>
				</div>
				<MySkills />
				<MyWay />
			</section>
		</>
	)
}
