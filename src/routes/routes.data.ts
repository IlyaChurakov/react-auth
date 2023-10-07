import Home from '../components/home/Home.tsx'
import LoginForm from '../components/login-form/LoginForm.tsx'
import Profile from '../components/profile/Profile.tsx'
import Users from '../components/users/Users.tsx'

interface Route {
	path: string
	component: React.ComponentType
	isAuth: boolean
}

export const routes: Route[] = [
	{
		path: '/',
		component: Home,
		isAuth: true,
	},
	{
		path: '/login',
		component: LoginForm,
		isAuth: false,
	},
	{
		path: '/users',
		component: Users,
		isAuth: true,
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true,
	},
]
