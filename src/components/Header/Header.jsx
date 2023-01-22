import React from 'react';

const Header = (props) => {
    console.log('Header');
    return (
        <h1>{props.course}</h1>
    );
}

export default Header;
