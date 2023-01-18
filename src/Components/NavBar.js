import { Link, NavLink } from "react-router-dom"

const NavBar = ({ allStudents }) => (
    <nav className="navbar">
        <Link to="/" className="home">Home</Link>
        <ul>
            {allStudents.map((student, index) => (
                <NavLink to={`/${student}`}>{student}</NavLink>
            ))}
        </ul>
    </nav>
)
export default NavBar