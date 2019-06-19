import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header() {
    return (
        <header className="app-header" id="header">
            <h1 id="title">Todo</h1>
        </header>
    )
}

Header.propTypes = {
    Header: PropTypes.func.isRequired
}


export default Header;