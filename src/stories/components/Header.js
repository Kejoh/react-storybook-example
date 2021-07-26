import React from 'react';
import './Header.css';

const Header = ({ content }) => {
    return (
        <h1 className="header">
            { content }
        </h1>
    )
}

export default Header;