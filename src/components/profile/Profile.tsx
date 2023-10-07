import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../main'

const Profile = () => {
	const { store } = useContext(Context)

	return (
		<div>
			<h1>{store.isAuth ? `${store.user.email}` : 'Не авторизован'}</h1>
			<h2>
				{store.user.isActivated
					? 'Аккаунт подтвержден'
					: 'Ваша почта не подтверждена, доступны не все функции'}
			</h2>
		</div>
	)
}

export default observer(Profile)
