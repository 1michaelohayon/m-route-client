import axios from 'axios'

const baseUrl = 'http://localhost:5000/'

const url = `${baseUrl}/api/user`


let token: string | null = null

const setToken = (newToken: string) => {
    token = `${newToken}`
}
const getUsers = async () => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.get(url, config)
    return response.data
}
const getUser = async (id: string) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.get(`${url}/${id}`, config)
    return response.data
}

const userService = {
    getUsers,
    getUser,
    setToken
}

export default userService