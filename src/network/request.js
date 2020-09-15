import axios from 'axios'

const baseURL = 'https://a6049277732500-dev.apicloud-saas.com/api'
const timeout = 5000
export function request(config) {
	const instance = axios.create({
		baseURL,
		timeout
	})
	return instance(config)
}