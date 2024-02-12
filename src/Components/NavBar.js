import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate} from 'react-router-dom'

const NavBar = () => {
    const history = useNavigate()
    const { pathname } = useLocation()
    const [prevScrollY, setPrevScrollY] = useState(0)
    const [show, setShow] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const height = useSelector(state => state.height)
    const {height:heights} = height
    useEffect(() => {
        setShow(false)
    }, [pathname])
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
                <img className='pointer' onClick={()=>setShow(true)} width="20" height="20" src="https://img.icons8.com/ios/20/menu--v1.png" alt="menu--v1"/>
                <span className='pointer' onClick={()=>setShow(true)} >
                    Menu
                </span>
                <img onClick={()=>setSearchOpen(true)} className='imgLg pointer' width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/search--v1.png" alt="search--v1"/>
                <span onClick={()=>setSearchOpen(true)} className='pointer'>
                    Search
                </span>
            </div>
            <Link to={"/"} className='Logo font2'>
                KRYSPATRA
            </Link>
            <div className='logoContainer centerY'>
                <a href="tel:+17252508777">
                    Call Us
                </a>
                <Link to={"/wish/list"}>
                    Wishlist
                </Link>
                <Link to={"/products/cart"}>
                    Cart
                </Link>
                <img onClick={()=>history("/products/cart") } className='imgLg pointer' width="20" height="20" src="https://img.icons8.com/ios/20/red-purse.png" alt="red-purse"/>
                <span>0</span>
            </div>
            <div className={show ? "breadCrumbsMenu display" : "breadCrumbsMenu"}>
                <div className="sticky-top">
                    <div className='boxBreadCrumbs'>
                        <img onClick={()=>setShow(!show)} className="pointer" width="25" height="25" src="https://img.icons8.com/windows/25/multiply.png" alt="multiply"/>
                        <small onClick={()=>setShow(!show)} className="pl_1 pointer">Close</small>
                    </div>
                    <div className="overflowy">
                        <div>
                            <Link to={"/"}>
                                <span>Home </span>
                                <samp>
                                    <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/3F3F1C/forward.png" alt="forward"/>
                                    <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/3F3F1C/forward.png" alt="forward"/>
                                </samp>
                            </Link>
                            <Link to={"/bags/list"}>
                                <span>All Bags </span>
                                <samp>
                                    <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/3F3F1C/forward.png" alt="forward"/>
                                    <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/3F3F1C/forward.png" alt="forward"/>
                                </samp>
                            </Link>
                            <Link to={"/products/cart"}>
                                <span>Cart </span>
                                <samp>
                                    <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/3F3F1C/forward.png" alt="forward"/>
                                    <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/3F3F1C/forward.png" alt="forward"/>
                                </samp>
                            </Link>
                            <Link to={"/wish/list"}>
                                <span>Wish List </span>
                                <samp>
                                    <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/3F3F1C/forward.png" alt="forward"/>
                                    <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/3F3F1C/forward.png" alt="forward"/>
                                </samp>
                            </Link>
                            <a href="tel:+17252508777">
                                <span>Call </span>
                                <samp>
                                    <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/3F3F1C/forward.png" alt="forward"/>
                                    <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/3F3F1C/forward.png" alt="forward"/>
                                </samp>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <div className={searchOpen ? "searchBg" : "d_none"}>
                <div className='searchInputContainer'>
                    <img className='imgLg' width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/search--v1.png" alt="search--v1"/>
                    <input autoFocus type="text" placeholder='Search Iconic Bags' />
                </div>
                <img onClick={()=>setSearchOpen(false)} className='cancelSearch' width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/20/delete-sign.png" alt="delete-sign"/>
            </div>
        </div>
    )
}

export default NavBar