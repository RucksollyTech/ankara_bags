import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div>
            <div className="Foot">
                <div className='standardWidth '>
                    <div className="Footer">
                        <div>
                            <h1>
                                HELP
                            </h1>
                            <div className="footerBody">
                                Our Client Advisors are available to 
                                assist you by phone at <a className='anchor' href="tel:+17252508777">+1 (725) 250-8777</a>
                                . You can also <a className='anchor' href="mailto:kryspatra.services@gmail.com">email us</a>.
                            </div>
                        </div>
                        <div>
                            <h1>
                                LINKS
                            </h1>
                            <div className="footerBody">
                                
                                <div className='pb-2'>
                                    <Link to={"/"}>
                                        All Bags
                                    </Link>
                                </div>
                                <div className='pb-2'>
                                    <Link to={"/"}>
                                        New Arrival
                                    </Link>
                                </div>
                                <div className='pb-2'>
                                    <Link to={"/"}>
                                        Custom Request
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>
                                EMAIL SIGN-UP
                            </h1>
                            <div className="footerBody">
                                <span className='anchor pointer'>Sign up</span> for KrysPatra emails and 
                                receive the latest news on exclusive online pre-launches 
                                and new collections.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Copyright">
                <div className="standardWidth">
                    © Copyright {date} Krispatra. All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer