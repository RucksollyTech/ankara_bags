import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ZoomModal from './Components/ZoomModal'

const Cart = () => {
    const [showSideBarTwo, setShowSideBarTwo] = useState(false)
    const [show, setShow] = useState(false)
    const [zoom, setZoom] = useState(false)
    const togglerSideBar = () => setShowSideBarTwo(!showSideBarTwo)
    const zoomer = (data) => {
        setShow(true)
        setZoom(data)
    }
    
    return (
        <div className='cart'>
            <div className="cartContent">
                <div className="twoEquo centerY">
                    <div className="header2">
                        My Shopping Cart <span>(3)</span>
                    </div>
                    <div>
                        <Link className='anchor' to={"/"}>
                            Continue shopping
                        </Link>
                    </div>
                    
                </div>
                <div className='cartDetailsContainer'>
                    <div className='shopLeft'>
                        <div className='theContent img relative' onClick={()=>zoomer(["/Images/bag.avif","/Images/bag2.avif"])}>
                            <img src="/Images/bag.avif" alt="bag" />
                            <img className='zoomIcon' width="20" height="20" src="https://img.icons8.com/external-icongeek26-outline-icongeek26/20/external-zoom-in-graphic-design-icongeek26-outline-icongeek26.png" alt="external-zoom-in-graphic-design-icongeek26-outline-icongeek26"/>
                        </div>
                    </div>
                    <div className='border_left'>
                        <div className='border_bottom padderCart'>
                            <div>
                                <small>
                                    BG1001
                                </small>
                            </div>
                            <div className='ppadName'>
                                <div className="productName">
                                    Bag Name and Names
                                </div>
                            </div>
                        </div>
                        <div className="padderCart">
                            <div className="twoEquo">
                                <span>
                                    Color
                                </span>
                                <span>
                                    Monogram
                                </span>
                            </div>
                            <div className="twoEquo pt-1">
                                <span>
                                    Material
                                </span>
                                <span>
                                    Monogram
                                </span>
                            </div>
                            
                        </div>
                        <div className="heightManager" />
                        <div className="padderCart border_bottom">
                            <div className="twoEquo centerY">
                                <div className='sel'>
                                    <select>
                                        <option value="">
                                            2
                                        </option>
                                    </select>
                                </div>
                                <span>
                                    $4,740.00
                                </span>
                            </div>
                        </div>
                        <div className='divideByTwo'>
                            <div className='text-center xx pointer'  onClick={togglerSideBar}>
                                <img width="15" height="15" src="https://img.icons8.com/fluency-systems-regular/15/visible--v1.png" alt="visible--v1"/>
                                <span className='pl_1'>View Details</span>
                            </div>
                            <div className='text-center pointer'>
                                <img width="15" height="15" src="https://img.icons8.com/ios/15/cancel.png" alt="cancel"/>
                                <span className='pl_1'>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cartDetailsContainer'>
                    <div className='shopLeft'>
                        <div className='theContent img relative' onClick={()=>zoomer(["/Images/bag.avif","/Images/bag2.avif"])}>
                            <img src="/Images/bag.avif" alt="bag" />
                            <img className='zoomIcon' width="20" height="20" src="https://img.icons8.com/external-icongeek26-outline-icongeek26/20/external-zoom-in-graphic-design-icongeek26-outline-icongeek26.png" alt="external-zoom-in-graphic-design-icongeek26-outline-icongeek26"/>
                        </div>
                    </div>
                    <div className='border_left'>
                        <div className='border_bottom padderCart'>
                            <div>
                                <small>
                                    BG1001
                                </small>
                            </div>
                            <div className='ppadName'>
                                <div className="productName">
                                    Bag Name and Names
                                </div>
                            </div>
                        </div>
                        <div className="padderCart">
                            <div className="twoEquo">
                                <span>
                                    Color
                                </span>
                                <span>
                                    Monogram
                                </span>
                            </div>
                            <div className="twoEquo pt-1">
                                <span>
                                    Color
                                </span>
                                <span>
                                    Monogram
                                </span>
                            </div>
                            
                        </div>
                        <div className="heightManager" />
                        <div className="padderCart border_bottom">
                            <div className="twoEquo centerY">
                                <div className='sel'>
                                    <select>
                                        <option value="">
                                            2
                                        </option>
                                    </select>
                                </div>
                                <span>
                                    $4,740.00
                                </span>
                            </div>
                        </div>
                        <div className='divideByTwo'>
                            <div className='text-center xx pointer' onClick={togglerSideBar}>
                                <img width="15" height="15" src="https://img.icons8.com/fluency-systems-regular/15/visible--v1.png" alt="visible--v1"/>
                                <span className='pl_1'>View Details</span>
                            </div>
                            <div className='text-center pointer'>
                                <img width="15" height="15" src="https://img.icons8.com/ios/15/cancel.png" alt="cancel"/>
                                <span className='pl_1'>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white ">
                <div className='rightSideContents'>
                    <div className="twoEquo">
                        <span>
                            Subtotal
                        </span>
                        <span>
                            $9,480.00
                        </span>
                    </div>
                    <div className="twoEquo">
                        <span>
                            Shipping
                        </span>
                        <span>
                            $0.00
                        </span>
                    </div>
                    <div className="twoEquo">
                        <span>
                            Tax
                        </span>
                        <span>
                            $0.00
                        </span>
                    </div>
                    <div className="mt-2">
                        <small className='text-muted'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, nihil.
                        </small>
                    </div>
                    <div className="twoEquo mt-4 font_17">
                        <span>
                            Total
                        </span>
                        <span>
                            $9,480.00
                        </span>
                    </div>
                    <div className="mt-4">
                        <button className='productButton'>
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>
            <div onClick={togglerSideBar} className={`${showSideBarTwo ? "addToCartSideBar" : "d_none"}`} />
            <div className={`${showSideBarTwo ? "productDetailContainer display" : "productDetailContainer"}`}>
                <div className="autos">
                    <div className="pt-4 bg-white sticky-top">
                        <div className="twoEquo pt-4  bg-white">
                            <div className='font_17'>
                                Product details
                            </div>
                            <img className='pointer' onClick={togglerSideBar} width="20" height="20" src="https://img.icons8.com/material-rounded/20/delete-sign.png" alt="delete-sign"/>
                        </div>
                    </div>
                    <div className='heightRow xm'>
                        <div className='cartViews py-4 border-bottom'>
                            <div className="theContent">
                                <img className='img' src="/Images/bag.avif" alt="Bag" />
                            </div>
                            <div className="bagWords p-3">
                                <div className='font_14'>
                                    Bag Name and Names
                                </div>
                                <div className='font_14'>
                                    $2,500.00
                                </div>
                            </div>
                        </div>
                        <div className='py-3'>
                            {/* If the length is > 0 */}
                            {/* <ul>
                                <div className="divideByTwoWithGap ">
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </div>
                            </ul> */}
                            <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                            </ul>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                        <div className="sticky-bottom bg-white">
                            <button className='productButton'>
                                View Product Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ZoomModal show={show} setShow={setShow} zoom={zoom} />
        </div>
    )
}

export default Cart