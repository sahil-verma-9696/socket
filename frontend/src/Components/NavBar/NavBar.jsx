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
                        <Link className="btn" onClick={logout}>Logout</Link>
                        :
                        <Link className="btn" onClick={login}  to={"/login"}>Login</Link>
                    }


                </div>
            </div>
        </nav>
    )
}

export default NavBar
