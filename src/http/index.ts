import axios from 'axios'
import { AuthResponse } from '../models/response/AuthResponse'

const $axios = axios.create({
	withCredentials: true,
	baseURL: import.meta.env.VITE_API_URL,
})

$axios.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

$axios.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config

		if (
			error.response.status == 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				const response = await axios.get<AuthResponse>(
					`${import.meta.env.VITE_API_URL}/refresh`,
					{ withCredentials: true }
				)
				localStorage.setItem('token', response.data.accessToken)
				return $axios.request(originalRequest)
			} catch (err) {
				console.log('Пользователь не авторизован')
			}
		}
		throw error
	}
)

export default $axios
