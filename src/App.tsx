import { observer } from 'mobx-react-lite'
import { FC, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './app.scss'
import { Context } from './main'
import Router from './routes/Router.tsx'
import Header from './ui/header/Header.tsx'

const App: FC = () => {
	const { store } = useContext(Context)
	const { pathname } = useLocation()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth()
		}
	}, [])

	return (
		<>
			{pathname !== '/login' && <Header />}
			<Router />
		</>
	)
}

export default observer(App)
