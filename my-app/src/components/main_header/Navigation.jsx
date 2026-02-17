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
            </ul>
        </nav>
    )
}
export default Navigation
