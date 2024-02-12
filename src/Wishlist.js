import React from 'react'
import { Link } from 'react-router-dom'

const Wishlist = () => {
    const toggler = e => e.target.classList.toggle("active")
    return (
        <div className='wishList'>
            <div className="wishListContainer">
                <div className='wishListContent relative'>
                    <div className="theContent" onClick={toggler}>
                        <img src="/Images/bag.avif" alt="Bag" />
                        <div className="wishListDetailDisplay">
                            <div>
                                <small>
                                    BG1001
                                </small>
                            </div>
                            <div className='ppadName'>
                                <div className="productName font_17">
                                    Bag Name and Names
                                </div>
                            </div>
                            <div className="pt-1 font_12">
                                <span>
                                    Color
                                </span>
                                <span>
                                    Monogram
                                </span>
                            </div>
                            <div className=" pt-1 font_12">
                                <span>
                                    Material
                                </span>
                                <span>
                                    Monogram
                                </span>
                            </div>
                            <div className="font_12 py-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, delectus!
                            </div>
                            <div className='text-dark py-3 xd'>
                                <button className='productButton'>
                                    Place in cart
                                </button>
                                <div className='pt-2'>
                                    <button className='productButton xx'>
                                        <span className="mr-1">
                                            <img width="15" height="15" src="https://img.icons8.com/material-rounded/15/plus-math--v1.png" alt="plus-math--v1"/>
                                        </span>Full Details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bagWords bg-white">
                            <div>
                                Bag Name and Names
                            </div>
                            <div>
                                $2,200.00
                            </div>
                            <div className='twoEquo'>
                                <span>View</span> 
                                <span>
                                    <img width="20" height="20" src="https://img.icons8.com/ios/20/info--v1.png" alt="info--v1"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wishListContent relative'>
                    <div className="theContent" onClick={toggler}>
                        <img src="/Images/bag.avif" alt="Bag" />
                        <div className="bagWords bg-white">
                            <div>
                                Bag Name and Names
                            </div>
                            <div>
                                $2,200.00
                            </div>
                            <div className='twoEquo'>
                                <span>View</span> 
                                <span>
                                    <img width="20" height="20" src="https://img.icons8.com/ios/20/info--v1.png" alt="info--v1"/>
                                </span>
                            </div>
                        </div>

                        <div className="wishListDetailDisplay">
                            <div>
                                <small>
                                    BG1001
                                </small>
                            </div>
                            <div className='ppadName'>
                                <div className="productName font_17">
                                    Bag Name and Names
                                </div>
                            </div>
                            <div className="pt-1 font_12">
                                <span>
                                    Color
                                </span>
                                <span>
                                    Monogram
                                </span>
                            </div>
                            <div className=" pt-1 font_12">
                                <span>
                                    Material
                                </span>
                                <span>
                                    Monogram
                                </span>
                            </div>
                            <div className="font_12 py-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, delectus!
                            </div>
                            <div className='text-dark py-3 xd'>
                                <button className='productButton'>
                                    Place in cart
                                </button>
                                <div className='pt-2'>
                                    <button className='productButton xx'>
                                        <span className="mr-1">
                                            <img width="15" height="15" src="https://img.icons8.com/material-rounded/15/plus-math--v1.png" alt="plus-math--v1"/>
                                        </span>Full Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='wishListContent relative'>
                    <div className="theContent" onClick={toggler}>
                        <img src="/Images/bag.avif" alt="Bag" />
                        
                        <div className="bagWords bg-white">
                            <div>
                                Bag Name and Names
                            </div>
                            <div>
                                $2,200.00
                            </div>
                            <div className='twoEquo'>
                                <span>View</span> 
                                <span>
                                    <img width="20" height="20" src="https://img.icons8.com/ios/20/info--v1.png" alt="info--v1"/>
                                </span>
                            </div>
                        </div>

                        <div className="wishListDetailDisplay">
                            <div>
                                <small>
                                    BG1001
                                </small>
                            </div>
                            <div className='ppadName'>
                                <div className="productName font_17">
                                    Bag Name and Names
                                </div>
                            </div>
                            <div className="pt-1 font_12">
                                <span>
                                    Color
                                </span>
                                <span>
                                    Monogram
                                </span>
                            </div>
                            <div className=" pt-1 font_12">
                                <span>
                                    Material
                                </span>
                                <span>
                                    Monogram
                                </span>
                            </div>
                            <div className="font_12 py-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, delectus!
                            </div>
                            <div className='text-dark py-3 xd'>
                                <button className='productButton'>
                                    Place in cart
                                </button>
                                <div className='pt-2'>
                                    <button className='productButton xx'>
                                        <span className="mr-1">
                                            <img width="15" height="15" src="https://img.icons8.com/material-rounded/15/plus-math--v1.png" alt="plus-math--v1"/>
                                        </span>Full Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Wishlist