import React from 'react'
import styles from './Works.module.sass'
import { Tittle, WorkBlock } from '@components'

export const Works = () => {
	return (
		<>
			<section className={styles.works_wrapper}>
				<div className={styles.works}>
					<Tittle text={'Мои работы'} />
					<div className={styles.wrapper_works_blocks}>
						<WorkBlock
							title={'Game Shop'}
							tags={[
								{ img: './images/icons/Vue_blue.svg', text: 'Vue' },
								{ img: './images/icons/Sass_blue.svg', text: 'Sass' },
							]}
							img={'./images/Bg/Bg_GameShop.png'}
							url={'https://game-shop-77254.firebaseapp.com/'}
						/>
						<WorkBlock
							title={'Landing Page'}
							tags={[
								{ img: './images/icons/Html_blue.svg', text: 'Html' },
								{ img: './images/icons/Css_blue.svg', text: 'Css' },
								{ img: './images/icons/Js_blue.svg', text: 'Javascript' },
							]}
							img={'./images/Bg/Bg_LandingPage.png'}
							url={'https://lapxi010.github.io/Landing-page-cloud-service/'}
						/>
						<WorkBlock
							title={'Tours Plan'}
							tags={[
								{ img: './images/icons/Html_blue.svg', text: 'Html' },
								{ img: './images/icons/Css_blue.svg', text: 'Css' },
								{ img: './images/icons/Js_blue.svg', text: 'Javascript' },
							]}
							img={'./images/Bg/Bg_Tour.png'}
							url={'https://github.com/Lapxi010/tours-plan'}
						/>
						<WorkBlock
							title={'Vape Shop'}
							tags={[
								{ img: './images/icons/Vue_blue.svg', text: 'Vue' },
								{ img: './images/icons/Sass_blue.svg', text: 'Sass' },
							]}
							img={'./images/Bg/Bg_Vape.png'}
							url={'https://github.com/Lapxi010/pet-project-vape-shop'}
						/>
					</div>
				</div>
			</section>
		</>
	)
}
