import React from 'react'
import styles from './MySkills.module.sass'
import { BoxSkill } from './BoxSkill/BoxSkill'

export const MySkills = () => {
	return (
		<>
			<section className={styles.skills}>
				<div className={styles.title}>Мои навыки</div>
				<div className={styles.skill_enumerate}>
					<BoxSkill
						TitleT={'Html'}
						img={'./images/icons/Html.svg'}
						TextT={
							'Html это первый инструмент из ui разработки, с которым я познакомился. Он показался мне очень простым и понятным. Я хорошо его знаю.'
						}
						Back={{
							theory: 500,
							practice: 500,
							text: 'Я прочел и посмотрел много видео и статей по html. Я считаю, что его я знаю полностью.',
						}}
					/>
					<BoxSkill
						TitleT={'Css'}
						img={'./images/icons/Css.svg'}
						TextT={
							'Сss это прекрасный инструмент  ui разработки, который я очень люблю за его безграничность и простоту. Я хорошо его знаю.'
						}
						Back={{
							theory: 500,
							practice: 500,
							text: 'Вместе с изучением html я также изучал css, поэтому я считаю, что его я знаю также.',
						}}
					/>
					<BoxSkill
						TitleT={'JavaScript'}
						img={'./images/icons/JavaScript.svg'}
						TextT={
							'JavaScript это великолепный инструмент, который мне нравится и не нравится одновременно (Из-за отсутствия строгой типизации).'
						}
						Back={{
							theory: 250,
							practice: 400,
							text: 'Я знаю JavaScript примерно на половину, хотя я довольно много практиковался.',
						}}
					/>
					<BoxSkill
						TitleT={'Vue'}
						img={'./images/icons/Vue.svg'}
						TextT={
							'Vue это мой первый фреймворк, с которым я познакомился. Я считаю, что он очень хорош для маленьких проектов.'
						}
						Back={{
							theory: 450,
							practice: 300,
							text: 'Vue довольно прост в изучение, у него маленькая документация, поэтому я его знаю приемлемо.',
						}}
					/>
					<BoxSkill
						TitleT={'React'}
						img={'./images/icons/React.svg'}
						TextT={
							'React мне очень нравится, но я его мало знаю. Я считаю, что react это лучшее, что есть в ui разработке. Он идеален.'
						}
						Back={{
							theory: 30,
							practice: 50,
							text: 'С react я знаком плохо, и мало с ним практиковался, но все таки небольшой опыт есть.',
						}}
					/>
					<BoxSkill
						TitleT={'Node Js'}
						img={'./images/icons/Node.svg'}
						TextT={
							'C Node Js я был вынужден познакомиться в связи необходимостью взаимодействовать с сервером. Он классный, особенно express.'
						}
						Back={{
							theory: 100,
							practice: 120,
							text: 'Я прошел несколько курсов по Node js. Я в состоянии создать простенький сервер или собрать проект.',
						}}
					/>
					<BoxSkill
						TitleT={'Webpack'}
						img={'./images/icons/Webpack.svg'}
						TextT={
							'Webpack я использую практически во всех проектах. Он универсален и необходим везде. Он очень прост для людей, которые знакомы с node js.'
						}
						Back={{
							theory: 40,
							practice: 100,
							text: 'Я webpack знаю больше из практики, а не из теории, потому что документация у них так себе.',
						}}
					/>
					<BoxSkill
						TitleT={'Sass'}
						img={'./images/icons/Sass.svg'}
						TextT={
							'Sass это инструмент, с которым я познакомился после знакомства с css. Он очень упрощает разработку и делает её приятней.'
						}
						Back={{
							theory: 10,
							practice: 400,
							text: 'Теории у Sass нет, да она и не нужна. Ведь это просто предпроцессор.',
						}}
					/>
				</div>
			</section>
		</>
	)
}
