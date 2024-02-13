import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADJUST_HEIGHT_FAIL } from './Components/Constants'
import { hightAddAction } from './Components/Action'
import { useNavigate } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel'
import ZoomModal from './Components/ZoomModal'

const BagDetails = () => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const [showSideBar, setShowSideBar] = useState(false)
    const [showSideBarTwo, setShowSideBarTwo] = useState(false)
    const [theHeight, setTheHeight] = useState(false)
    const [show, setShow] = useState(false)
    const [zoom, setZoom] = useState(false)
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const dataTest = ["/Images/bag.avif","/Images/bag2.avif"]
    const zoomer = (data) => {
        setShow(true)
        let selectedImg = dataTest.filter(i => i !== data)
        setZoom([data, ...selectedImg])
    }
    const checkScroll = (e) => {
        setTheHeight(e.target.scrollTop)
        localStorage.setItem(`hightItems`, JSON.stringify(e.target.scrollTop))
        dispatch(hightAddAction())
    }

    const toggler = () => {
        setShowSideBar(!showSideBar)
        localStorage.setItem(`hightItems`, JSON.stringify(showSideBar ? theHeight : 51))
        dispatch(hightAddAction())
    }
    const togglerSideBar = () => {
        setShowSideBarTwo(!showSideBarTwo)
        localStorage.setItem(`hightItems`, JSON.stringify(showSideBarTwo ? theHeight : 51))
        dispatch(hightAddAction())
    }
    
    useEffect(()=>{
        return ()=>dispatch({
            type : ADJUST_HEIGHT_FAIL,
        })
    },[])
    return (
        <div className='bagDetailViewContainer'>
            <div className="scrollTip relative detailsCarouselLg" onScroll={checkScroll}>
                <div className="absoluteScroll">
                    <div onClick={()=>zoomer("/Images/bag2.avif")}>
                        <img src="/Images/bag2.avif" alt="Bag" onClick={()=>zoomer("/Images/bag2.avif")} />
                    </div>
                    <div onClick={()=>zoomer("/Images/bag.avif")}>
                        <img src="/Images/bag.avif" alt="Bag" onClick={()=>zoomer("/Images/bag.avif")} />
                    </div>
                    {/* <img src="/Images/bag2.avif" alt="Bag" onClick={()=>zoomer("/Images/bag2.avif")} /> */}
                    {/* <img src="/Images/bag.avif" alt="Bag" onClick={()=>zoomer("/Images/bag.avif")} /> */}
                </div>
            </div>
            <div className='detailsCarouselSm'>
                <Carousel 
                    activeIndex={index} 
                    onSelect={handleSelect}
                    controls = {false}
                    indicators = {false}
                    interval={null}
                >
                    <Carousel.Item>
                        <div onClick={()=>zoomer("/Images/bag2.avif")}>
                            <img src="/Images/bag2.avif" alt="Bag" onClick={()=>zoomer("/Images/bag2.avif")} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div onClick={()=>zoomer("/Images/bag.avif")}>
                            <img src="/Images/bag.avif" alt="Bag" onClick={()=>zoomer("/Images/bag.avif")} />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='bagDetails'>
                <div className="bagDetailsContent">
                    <div className="twoEquo">
                        <small>
                            BG1001
                        </small>
                        <span>
                            <img width="20" height="20" src="https://img.icons8.com/material-outlined/20/19110B/like--v1.png" alt="like--v1"/>
                        </span>
                    </div>
                    <div>
                        <div className="productName">
                            Bag Name and Names
                        </div>
                        <div>
                            $2,500.00
                        </div>
                    </div>
                    <div className="productButtonContainer">
                        <button onClick={toggler} className='productButton'>
                            Place in cart
                        </button>
                    </div>
                    <div className='text-muted font_12'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, commodi?
                    </div>
                    <div className="pt-3">
                        <small className=" pointer" onClick={togglerSideBar}>
                            Product details
                        </small>
                    </div>
                </div>
            </div>
            <div className={`${showSideBar ? "addToCartSideBar" : "d_none"}`}>
                <div className='leftAutoBeen'>
                    <div className="twoEquo">
                        <div className='font_17'>
                            Added to Cart
                        </div>
                        <img onClick={toggler} width="20" height="20" src="https://img.icons8.com/material-rounded/20/delete-sign.png" alt="delete-sign"/>
                    </div>
                    <div className="gg">
                        <div className='theContent img'>
                            <img src="/Images/bag.avif" alt="Bag" />
                        </div>  
                        <div className='padMe'>
                            <div className="twoEquo">
                                <small>
                                    BG1001
                                </small>
                            </div>
                            <div className='ppadName'>
                                <div className="productName">
                                    Bag Name and Names
                                </div>
                                <div>
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <div className='pt-2'>
                                    $2,500.00
                                </div>
                            </div>
                        </div>                      
                    </div>
                    <div className="mt-4">
                        <button onClick={()=>history("/products/cart")} className='productButton'>
                            View my Cart
                        </button>
                        <button onClick={toggler} className='productButton xx'>
                            Continue Shopping
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
                        <div className=' pt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Velit incidunt earum nulla enim quas aut 
                            tempora expedita ab! Ex, nobis.
                        </div>
                        <div className="pt-5">
                            <div>15 x 6.3 x 3.1 inches</div>
                            <div>(length x Height x Width)</div>
                        </div>
                        <ul className='pt-4'>
                            <div className="divideByTwoWithGap ">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </div>
                        </ul>
                        <div className="pt-3 ">
                            Lorem ipsum dolor sit, amet consectetur adipisicing lore mauris
                        </div>
                        <div className='pt-4'>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Sustainability</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Product Care</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <ZoomModal show={show} setShow={setShow} zoom={zoom} />
        </div>
    )
}

export default BagDetails