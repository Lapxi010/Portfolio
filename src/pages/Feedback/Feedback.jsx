import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Feedback.module.sass'
import { Tittle } from '@components'

export const Feedback = () => {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [message, setMessage] = useState('')

	const changeEmail = (e) => {
		setEmail(e.target.value)
	}

	const changeName = (e) => {
		setName(e.target.value)
	}

	const changeMessage = (e) => {
		if(!(e.target.value.length + 1 > 250)){
			setMessage(e.target.value)
		}
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		if(email && name && message) {
			await axios.post('https://portfolio-b25d4-default-rtdb.firebaseio.com/feedback', {
				email,
				name,
				message
			})
		}
	}

	return (
		<>
			<section className={styles.feedback_wrapper}>
				<div className={styles.feedback}>
					<Tittle text={'Leave feedback'} />
					<form
						onSubmit={onSubmit}
						className={styles.form}
					>
						<div className={styles.form_inputs}>
							<input value={email} onChange={changeEmail} type='text' placeholder={'Email'} />
							<input value={name} onChange={changeName} type='text' placeholder={'Name'} />
							<textarea value={message} onChange={changeMessage} placeholder={'Message'} />
						</div>
						<div className={styles.form_btn}>
							<button type={'submit'}>Send</button>
						</div>
					</form>
				</div>
			</section>
		</>
	)
}
