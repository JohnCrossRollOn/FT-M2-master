import React from "react";
import Style from "./Nav.module.css";
import {NavLink} from 'react-router-dom';
import Title from "./Title";


const Nav = (props)=> <div>
    <nav className={Style.Nav}>
        <NavLink to='/' className={({ isActive }) => Style.link+" "+(isActive ? (Style.current) : "")} end>
            <Title value="&lt;Weather/&gt;"/>
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => Style.link+" "+(isActive ? (Style.current) : "")} end>
            <Title value="&lt;About/&gt;"/>
        </NavLink>
    </nav>
</div>;

export default Nav;
