import React from 'react'
import styles from './MySkills.module.sass'
import { BoxSkill } from './BoxSkill/BoxSkill'

export const MySkills = () => {
	return (
		<>
			<section className={styles.skills}>
				<div className={styles.title}>My Skills</div>
				<div className={styles.skill_enumerate}>
					<BoxSkill
						TitleT={'Html'}
						img={'./images/icons/Html.svg'}
						TextT={'HTML is a language for building web pages.'}
						Back={{
							theory: 599,
							practice: 300,
							text: 'Html это первый инструмент, который я использовал.Его я знаю очень хорошо',
						}}
					/>
					<BoxSkill
						TitleT={'Css'}
						img={'./images/icons/Css.svg'}
						TextT={'Css is a language for beautifying a web page.'}
						Back={{
							theory: 599,
							practice: 300,
							text: 'Сss это второй инструмент, который я изучил  и успешно использовал в своих проектах',
						}}
					/>
					<BoxSkill
						TitleT={'JavaScript'}
						img={'./images/icons/Javascript.svg'}
						TextT={'JavaScript is a multi-paradigm programming language'}
						Back={{
							theory: 599,
							practice: 300,
							text: 'Javascript это мой самый любимый язык программирования, который я использую везде.',
						}}
					/>
					<BoxSkill
						TitleT={'Vue'}
						img={'./images/icons/Vue.svg'}
						TextT={
							'Vue is an JavaScript framework for building user interfaces.'
						}
						Back={{
							theory: 599,
							practice: 100,
							text: 'Vue это мой первый фреймворк с которым я познакомился.Я считаю, что я его хорошо знаю.',
						}}
					/>
					<BoxSkill
						TitleT={'React'}
						img={'./images/icons/React.svg'}
						TextT={
							'React is an JavaScript framework for building user interfaces.'
						}
						Back={{
							theory: 599,
							practice: 300,
							text: 'React это библиотека о которой я слышал из каждого утюга.Я его знаю плохо',
						}}
					/>
					<BoxSkill
						TitleT={'Node Js'}
						img={'./images/icons/Node.svg'}
						TextT={'Node  is a software platform based on the V8 engine'}
						Back={{
							theory: 599,
							practice: 300,
							text: 'Node js, как мне кажется универсальный инструмент на котором можно написать все.',
						}}
					/>
					<BoxSkill
						TitleT={'Webpack'}
						img={'./images/icons/Webpack.svg'}
						TextT={'webpack is an open source JavaScript module bundler.'}
						Back={{
							theory: 599,
							practice: 300,
							text: 'Webpack это та вещь без которой не обходится не один мой проект.Я считаю я его знаю приемлемо.',
						}}
					/>
					<BoxSkill
						TitleT={'Sass'}
						img={'./images/icons/Sass.svg'}
						TextT={
							'sass is a css preprocessor designed to speed up development'
						}
						Back={{
							theory: 599,
							practice: 300,
							text: 'Sass это та вещь без которой нельзя создавать проекты среднего и большого размера.',
						}}
					/>
				</div>
			</section>
		</>
	)
}
