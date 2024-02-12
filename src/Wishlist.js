import React, { useState } from 'react'
import QuestionModal from './Components/QuestionModal'

const Wishlist = () => {
    const [show, setShow] = useState(false);
    const toggler = e => e.target.parentNode.parentNode.classList.toggle("active")
    const removeToggle = e => e.target.parentNode.parentNode.parentNode.classList.toggle("active")
    return (
        <div className='wishList'>
            <div className='pb-3 wishStandardWidth'>
                <h3>
                    3 Items
                </h3>
            </div>
            <div className="wishListContainer wishStandardWidth">
                <div className='wishListContent relative'>
                    <div className="theContent" onClick={toggler}>
                        <img className='pointer' src="/Images/bag.avif" alt="Bag" />
                        <div className="wishListDetailDisplay pointer" onClick={removeToggle}>
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
                            
                        </div>
                    </div>
                    <img onClick={()=>setShow(true)} className='cancelWishList' width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/20/delete-sign.png" alt="delete-sign"/>
                </div>
                
            </div>
            <QuestionModal 
                show={show}
                setShow={setShow}
                msg="Do you wish to remove the item High Rise from your Wishlist?"
                head="Remove from my Wishlist"
                onHide={() => setShow(false)}
            />
        </div>
    )
}

export default Wishlist