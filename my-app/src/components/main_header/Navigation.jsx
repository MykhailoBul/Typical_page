import Buttons from '../UI/Buttons'
import './Navigation.css'

const Navigation = () => {
    return(
        <nav className='nav'>
            <ul>
                <li>
                    <a href="/user">Users</a>
                </li>
                <li>
                    <a href="/admin">Admin</a>
                </li>
                {props.loggedIn && (
                    <li>
                        <Buttons onClick={props.onLogout}>Logout</Buttons>
                    </li>
                )}
            </ul>
        </nav>
    )
}
export default Navigation
