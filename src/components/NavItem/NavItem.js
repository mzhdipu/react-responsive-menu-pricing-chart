import React from 'react';


const NavItem = ({router}) => {
    return (
        <li className='mr-10 list-none'>
            <a href={router.path}>{router.name}</a>
        </li>
    );
};

export default NavItem;