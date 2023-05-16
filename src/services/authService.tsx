
import axios from "./apiClient"




const authenticate = async (email: string, password: string) => {
    const response = await axios.post(`/api/auth`, { email, password })
    return response.data
}

const signup = async (email: string, fullName: string, password: string) => {
    const response = await axios.post(`/api/signup`, { email, password, fullName })
    return response.data
}

const authService = {
    authenticate,
    signup
}

export default authService
