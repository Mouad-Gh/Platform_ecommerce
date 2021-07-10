import React from 'react';
import TopLink from './TopLink';
import NavBar from './NavBar';
const Header = (props)=>{
    return(
        <div className="Header">
            <TopLink />
            <NavBar />
        </div>
    );
}

export default Header; 