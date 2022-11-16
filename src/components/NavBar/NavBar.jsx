import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
    return (
        <nav className='container'>
            <h1 className='app_name'>Algo Visualizer</h1>
            <ul>
                <NavLink
                    to = "path-find"
                    className={({isActive}) => 
                        isActive ? "algo_btn nav_active" : "algo_btn"}
                >
                    Path Finder
                </NavLink>
                <NavLink
                    to = "sort-vis"
                    className={({isActive}) => 
                        isActive ? "algo_btn nav_active" : "algo_btn"}
                >
                    Sorting Visualizer
                </NavLink>
            </ul>
        </nav>
    )
}