import { Link } from 'react-router-dom'

const NavBar = ({ user, login, logout }) => {
    return (
        <div>
            <div className="workingArea">
                <h1>Logo</h1>
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
        </div>
    )
}

export default NavBar
