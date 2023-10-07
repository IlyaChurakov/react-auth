import { BiUser } from 'react-icons/bi'
import { IoArrowBack } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = () => {
	const { pathname } = useLocation()

	return (
		<div className={styles.header}>
			{pathname === '/' ? (
				<Link to='/profile'>
					<BiUser fill='#fff' fontSize={29} />
				</Link>
			) : (
				<Link to='/'>
					<IoArrowBack
						style={{ color: 'fff', cursor: 'pointer', fontSize: '28px' }}
					/>
				</Link>
			)}

			<Hamburger />
		</div>
	)
}

export default Header
