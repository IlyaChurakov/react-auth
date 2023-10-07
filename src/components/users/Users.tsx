import { useQuery } from '@tanstack/react-query'
import UserService from '../../services/User.service'

const Users = () => {
	const { data, isLoading, isError } = useQuery(
		['users list'],
		() => UserService.getAllUsers(),
		{
			select: ({ data }) => data,
		}
	)

	return (
		<>
			{isLoading && <div>Загрузка списка юзеров</div>}
			{isError && <div>Ошибка</div>}
			{data?.length &&
				data.map(user => {
					return <div key={user._id}>{user.email}</div>
				})}
		</>
	)
}

export default Users
