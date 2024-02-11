import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [prevScrollY, setPrevScrollY] = useState(0)
    const height = useSelector(state => state.height)
    const {height:heights} = height
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setPrevScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);
    return (
        <div className={((prevScrollY && prevScrollY > 50) || heights > 50) ? "sticky-top bg-white navBar" : "sticky-top navBar borderNone"} >
            <div className='logoContainer centerY'>
                <img width="20" height="20" src="https://img.icons8.com/ios/20/menu--v1.png" alt="menu--v1"/>
                <span>
                    Menu
                </span>
                <img className='imgLg' width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/search--v1.png" alt="search--v1"/>
                <span>
                    Search
                </span>
            </div>
            <div className='Logo'>
                KRYSPATRA
            </div>
            <div className='logoContainer centerY'>
                <Link to={"/"}>
                    Call Us
                </Link>
                <Link to={"/"}>
                    Wishlist
                </Link>
                <Link to={"/"}>
                    Cart
                </Link>
                <img className='imgLg' width="20" height="20" src="https://img.icons8.com/ios/20/red-purse.png" alt="red-purse"/>
                <span>0</span>
            </div>
        </div>
    )
}

export default NavBar