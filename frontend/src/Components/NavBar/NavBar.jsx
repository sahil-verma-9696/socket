import "./style.scss"
import { Link } from 'react-router-dom'

const NavBar = ({ user, login, logout }) => {
    return (
        <nav>
            <div className="workingArea">
                <Link to={"/"}className="logo">Sandesh</Link>
                <div className="links">
                    <Link to={"/dashboard"}>Dashboard</Link>
                    <Link to={"/registration"}>Registration</Link>
                    {user ?
                        <button onClick={logout}>Logout</button>
                        :
                        <button onClick={login}>Login</button>
                    }


                </div>
            </div>
        </nav>
    )
}

export default NavBar
