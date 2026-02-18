import { Fragment, useEffect } from 'react'
import MainHeader from './components/main_header/MainHeader'
import Login from './components/Login/Login'

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    if(JSON.parse(localStorage.getItem('isLoggedUser') !== null)){
      return JSON.parse(localStorage.getItem('isLoggedUser')).isLogged
    } else {
      return false
    }
  })
  console.log(loggedIn)

  useEffect(() => {
    const storedLoggedUserData = JSON.parse(localStorage.getItem('isLoggedUser'))
    if(storedLoggedUserData !== null){
      if(storedLoggedUserData.isLogged === true){
        setLoggedIn(true)
      }
    }
  }, [])

  const loginHandler = (user, password) => {
    const loggedUser = localStorage.setItem('loggedUser', JSON.stringify({
      username: user,
      isLogged: true
    }))
    setLoggedIn(true) 
  }

  const logoutHandler = () => {
    localStorage.removeItem('loggedUser')
    setLoggedIn(false)
  }
  return(
    <Fragment>
        <MainHeader isAuthenticated={loggedIn}/>
        <main>
            {!loggedIn && <Login onLogin={loginHandler} onLogout={logoutHandler}/>}
            {loggedIn && <Home/>}
        </main>
    </Fragment>
  )
}

export default App
