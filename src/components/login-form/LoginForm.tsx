import cn from 'clsx'
import { observer } from 'mobx-react-lite'
import { FC, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../main'
import styles from './LoginForm.module.scss'

const LoginForm: FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { store } = useContext(Context)
	const navigate = useNavigate()

	useEffect(() => {
		if (store.isAuth) {
			navigate('/')
		}
	}, [store.isAuth])

	return (
		<div className={styles.form}>
			<h2 className={styles.form_title}>Войдите или зарегистрируйтесь</h2>
			<input
				type='text'
				placeholder='Email'
				onChange={e => setEmail(e.target.value)}
				value={email}
			/>
			<input
				type='password'
				placeholder='Password'
				onChange={e => setPassword(e.target.value)}
				value={password}
			/>
			<div className={styles.form_buttons}>
				<button
					className={cn(
						styles.form_buttons_item,
						styles.form_buttons_item_login
					)}
					onClick={() => store.login(email, password)}
				>
					Login
				</button>
				<button
					className={cn(
						styles.form_buttons_item,
						styles.form_buttons_item_registration
					)}
					onClick={() => store.registration(email, password)}
				>
					Registration
				</button>
			</div>
		</div>
	)
}

export default observer(LoginForm)
