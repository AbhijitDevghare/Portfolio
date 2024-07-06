import { NavLink } from "react-router-dom"
import "./MenuBar.css"

function MenuBar()
{
    return(
            <>
                <div className="menuBar" >
                        <NavLink to={"/"} className={({ isActive }) => isActive ? "active" : "nav-link"}>
                            Home
                        </NavLink>
                        <NavLink to={"about"} className={({ isActive }) => isActive ? "active" : "nav-link"}>
                            About
                        </NavLink>
                        <NavLink to={"projects"} className={({ isActive }) => isActive ? "active" : "nav-link"}>
                            Projects
                        </NavLink>
                        

                </div>
            </>
    )
}

export default MenuBar