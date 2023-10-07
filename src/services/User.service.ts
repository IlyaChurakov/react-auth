import { AxiosResponse } from 'axios'
import $axios from '../http'
import { IUser } from '../models/IUser'

export default class UserService {
	static async getAllUsers(): Promise<AxiosResponse<IUser[]>> {
		return $axios.get<IUser[]>('/users')
	}
}
