import React from "react";
import Style from "./Nav.module.css";
import {NavLink} from 'react-router-dom';
import Title from "./Title";


const Nav = (props)=> <div>
    <nav className={Style.Nav}>
        <NavLink to='/' exact='true' className={({ isActive }) => Style.link+" "+ (isActive ? (Style.current) : "")}>
            <Title value="&lt;Weather/&gt;"/>
        </NavLink>
        <NavLink to='/about' exact='true' className={({ isActive }) => Style.link+" "+(isActive ? (Style.current) : "")}>
            <Title value="&lt;About/&gt;"/>
        </NavLink>
    </nav>
</div>;

export default Nav;
