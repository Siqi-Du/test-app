import React from 'react';
import './style.scss';
import Logo from './../../assets/imgs/logo.png';


// functional component, not a class(not have lifecycle functions)
const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="my logo"></img>
                </div>
            </div>
        </header>
    )
};

export default Header;