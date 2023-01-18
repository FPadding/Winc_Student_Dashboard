import { NavLink } from "react-router-dom"

const NavBar = ({ allStudents }) => (
    <nav className="navbar">
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "home activelink" : "home"}
            end
        >Home
        </NavLink>
        <ul>
            {allStudents.map((student, index) => (
                <NavLink
                    to={`/${student}`}
                    className={({ isActive }) =>
                        isActive ? "activelink" : undefined}
                    key={index}
                >{student}
                </NavLink>
            ))}
        </ul>
    </nav>
)
export default NavBar