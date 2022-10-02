import React, { useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routers = [
        {id : 1, name : "Home", path : "/home"},
        {id : 2, name : "About", path : "/about"},
        {id : 3, name : "Shop", path : "/shop"},
        {id : 4, name : "Cart", path : "/cart"},
        {id : 5, name : "Contact", path : "/contact"},
    ]

    return (
        <nav className='bg-yellow-400 py-5'>

            <div onClick={()=> setOpen(!open)} className="ml-5 h-6 w-6 cursor-pointer md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>       

            <ul className={`bg-yellow-400 md:flex w-full justify-center absolute md:static duration-1000 mt-5 py-5 ease-in-out ${open ? 'top-8' : 'top-[-9999px]'}`}>
            {
                routers.map(router => <NavItem key={router.id} router = {router}></NavItem>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;