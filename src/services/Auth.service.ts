import { AxiosResponse } from 'axios'
import $axios from '../http'
import { AuthResponse } from '../models/response/AuthResponse'

export default class AuthService {
	static async login(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $axios.post<AuthResponse>('/login', { email, password })
	}

	static async registration(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $axios.post<AuthResponse>('/registration', { email, password })
	}

	static async logout(): Promise<void> {
		return $axios.post('/logout')
	}
}
