import React from 'react'
import { Header, Footer } from '@components'
import {About, Feedback, Works} from '@pages'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path={'/'} element={<About />} />
				<Route path={'/works'} element={<Works />} />
				<Route path={'/feedback'} element={<Feedback />} />
			</Routes>
			<Footer />
		</>
	)
}
