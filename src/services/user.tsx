import axios from "./apiClient"

let token: string | null = null

const setToken = (newToken: string) => {
    token = `${newToken}`
}
const getUsers = async () => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.get("/api/user", config)
    return response.data
}
const getUser = async (id: string) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.get(`/api/user/${id}`, config)
    return response.data
}

const userService = {
    getUsers,
    getUser,
    setToken
}

export default userService