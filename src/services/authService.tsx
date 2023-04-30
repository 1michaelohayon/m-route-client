
import axios from 'axios'

const baseUrl = 'http://localhost:5000'




const authenticate = async (email: string, password: string) => {
    const response = await axios.post(`${baseUrl}/auth`, { email, password })
    return response.data
}

const signup = async (email: string, fullName: string, password: string) => {
    const response = await axios.post(`${baseUrl}/signup`, { email, password, fullName })
    return response.data
}

const authService = {
    authenticate,
    signup
}

export default authService
