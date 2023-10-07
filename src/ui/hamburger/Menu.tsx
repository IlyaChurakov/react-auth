import cn from 'clsx'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../main'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data'

const Menu = ({ isShow, setIsShow }) => {
	const { store } = useContext(Context)
	const navigate = useNavigate()

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow,
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button
						onClick={async () => {
							await store.logout()
							navigate('/login')
						}}
					>
						Logout
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default observer(Menu)
