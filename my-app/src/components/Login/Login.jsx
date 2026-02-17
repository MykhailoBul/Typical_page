import './Login.css'

import Card from '../UI/Card'
import Buttons from '../UI/Buttons'

const Login = () => {
    return(
        <Card className="login">
            <form>
                <div className='control'>
                    <label for="email">Email</label>
                    <input type="email" id="email"></input>
                </div>
                <div className='control'>
                    <label for="password">Password</label>
                    <input type="password" id="password"></input>
                </div>
                <div className='actions'>
                    <Buttons type="submit">Login</Buttons>
                </div>
            </form>
        </Card>
    )
}
export default Login