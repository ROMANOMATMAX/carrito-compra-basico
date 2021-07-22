import React from 'react';

const Header = ({titulo, arrayTest, avatar}) => {
    return (
        <h1>{JSON.stringify(avatar)}</h1>
    );
}
 
export default Header;