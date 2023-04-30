import { useDispatch, useSelector } from "react-redux"
import { useField } from "../hooks/useField"
import { useEffect } from "react";
import { login, logout, setUser } from "../reducers/userReducer"
import { AppDispatch, RootState } from "..";
import { CSSProperties } from 'react';

function Login() {
    const email = useField('email')
    const password = useField('password')
    const dispatch: AppDispatch = useDispatch()
    const loggedIn = useSelector((state: RootState) => state.user)



    useEffect(() => {
        const loggedUnderJSON = window.localStorage.getItem('loggedMapUser')
        if (loggedUnderJSON) {
            const user = JSON.parse(loggedUnderJSON)
            dispatch(setUser(user))

        }
    }, [dispatch])


    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const creds = { email: email.value, password: password.value }

        await dispatch(login(creds));
        console.log(creds)
    }

    const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(logout())
    }


    if (loggedIn) {
        return <div style={logoutStlye}>
            <button onClick={handleLogout}>Logout</button>
        </div>
    }
    return <div style={loginStyle}>
        <form onSubmit={handleLogin}>
            <div>
                <input {...email} placeholder='אימייל' />
                <br />
                <input {...password} placeholder='סיסמה' />
                <div />

            </div>
            <button type="submit">התחבר</button>
        </form>
    </div>


}
export default Login



//styles
const loginStyle: CSSProperties = { direction: "rtl" }
const logoutStlye: CSSProperties = { direction: "rtl" }