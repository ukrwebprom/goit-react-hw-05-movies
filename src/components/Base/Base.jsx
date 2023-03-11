import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import './base.css'

export const Base = () => {

    return(
        <>
        <div className="header">
            <nav className="nav">
                <NavLink to="/" className="nav-item">Home</NavLink>
                <NavLink to="/movies" className="nav-item">Movies</NavLink>
            </nav>
        </div>
        <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
        </Suspense>
        </>
    )
}