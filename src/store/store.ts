import axios from 'axios'
import { makeAutoObservable } from 'mobx'
import { IUser } from '../models/IUser'
import { AuthResponse } from '../models/response/AuthResponse.js'
import AuthService from '../services/Auth.service.js'

export default class Store {
	user = {} as IUser
	isAuth = false
	isLoading = false

	constructor() {
		makeAutoObservable(this)
	}

	setAuth(bool: boolean) {
		this.isAuth = bool
	}

	setUser(user: IUser) {
		this.user = user
	}

	setLoading(bool: boolean) {
		this.isLoading = bool
	}

	async login(email: string, password: string) {
		try {
			const response = await AuthService.login(email, password)
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
		} catch (err) {
			console.log(err.response?.data?.message)
		}
	}

	async registration(email: string, password: string) {
		try {
			const response = await AuthService.registration(email, password)
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
		} catch (err) {
			console.log(err.response?.data?.message)
		}
	}

	async logout() {
		try {
			const response = await AuthService.logout()
			localStorage.removeItem('token')
			this.setAuth(false)
			this.setUser({} as IUser)
		} catch (err) {
			console.log(err.response?.data?.message)
		}
	}

	async checkAuth() {
		this.setLoading(true)

		try {
			const response = await axios.get<AuthResponse>(
				`${import.meta.env.VITE_API_URL}/refresh`,
				{ withCredentials: true }
			)

			console.log('checkAuth', response)
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
		} catch (err) {
			console.log(err.response?.data?.message)
		} finally {
			this.setLoading(false)
		}
	}
}
