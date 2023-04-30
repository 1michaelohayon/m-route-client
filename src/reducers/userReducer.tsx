import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch } from ".."
import authService from "../services/authService"

interface User {
    token: string
    fullName: string
}

const userSlice = createSlice({
    name: 'user',
    initialState: null as (null | User), //change later to include user
    reducers: {
        setUser(_state, action: PayloadAction<User>) {
            return action.payload
        },
        clearUser(state) {
            return (state = null)
        },
    },
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer


export const login = ({ email, password }: { email: string, password: string }) => {
    console.log("here")
    return async (dispatch: AppDispatch) => {
        const user = await authService.authenticate(email, password)
        window.localStorage.setItem('loggedMapUser', JSON.stringify(user))
        dispatch(setUser(user))
    }
}

export const logout = () => {
    return async (dispatch: AppDispatch) => {
        window.localStorage.removeItem('loggedMapUser')
        dispatch(clearUser())
    }
}





