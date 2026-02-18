import './Login.css'

import Card from '../UI/Card'
import Buttons from '../UI/Buttons'
import { useState, useEffect } from 'react'


const Login = () => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [emailIsValid, setEmailIsValid] = useState()
    const [passwordIsValid, setPasswordIsValid] = useState()
    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            console.log('Checking form validity')
            setFormIsValid(
                emailIsValid && passwordIsValid)
                console.log('checked')
        }, 500)
        return () => {
            clearTimeout(timeOut)
        }
    }, [passwordIsValid, emailIsValid])

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
    }

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'))
    }
    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        props.onLogin(enteredEmail, enteredPassword)
    }

    return(
        <Card className="login">
            <form onSubmit={submitHandler}>
                <div className={`control' ${emailIsValid === false ? 'invalid' : ''}`}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"
                    value={enteredEmail} onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}></input>
                </div>
                <div className={`control' ${passwordIsValid === false ? 'invalid' : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"
                    value={enteredPassword} onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}></input>
                </div>
                <div className='actions'>
                    <Buttons type="submit" disabled={!formIsValid}>Login</Buttons>
                </div>
            </form>
        </Card>
    )
}
export default Login