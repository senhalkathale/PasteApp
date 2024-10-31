import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-row gap-4 place-content-evenly px-4">
            {/* <h1>this is navbar</h1> */}
        <NavLink className="px-4"
        to="/"
        >Home
        </NavLink>
        <NavLink
        to="/pastes"
        >Pastes
        </NavLink>

        </div>
    )

}

export default Navbar;