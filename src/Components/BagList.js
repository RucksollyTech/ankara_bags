import React from 'react'
import { Link } from 'react-router-dom'

const BagList = () => {
    return (
        <div className='bagListContainer'>
            <Link to={"/product/details"}>
                <div className="theContent">
                    <img src="/Images/bag.avif" alt="Bag" />
                    <div className="bagWords">
                        <div>
                            Bag Name and Names
                        </div>
                        <div>
                            $2,500.00
                        </div>
                        <Link to={"/product/details"}>
                            View this bag
                        </Link>
                    </div>
                </div>
            </Link>
            <Link to={"/product/details"}>
                <div className="theContent">
                    <img src="/Images/bag.avif" alt="Bag" />
                    <div className="bagWords">
                        <div>
                            Bag Name and Names
                        </div>
                        <div>
                            $2,500.00
                        </div>
                        <Link to={"/product/details"}>
                            View this bag
                        </Link>
                    </div>
                </div>
            </Link>
            <Link to={"/product/details"}>
                <div className="theContent">
                    <img src="/Images/bag.avif" alt="Bag" />
                    <div className="bagWords">
                        <div>
                            Bag Name and Names
                        </div>
                        <div>
                            $2,500.00
                        </div>
                        <Link to={"/product/details"}>
                            View this bag
                        </Link>
                    </div>
                </div>
            </Link>
            <Link to={"/product/details"}>
                <div className="theContent">
                    <img src="/Images/bag.avif" alt="Bag" />
                    <div className="bagWords">
                        <div>
                            Bag Name and Names
                        </div>
                        <div>
                            $2,500.00
                        </div>
                        <Link to={"/product/details"}>
                            View this bag
                        </Link>
                    </div>
                </div>
            </Link>
            <Link to={"/product/details"}>
                <div className="theContent">
                    <img src="/Images/bag.avif" alt="Bag" />
                    <div className="bagWords">
                        <div>
                            Bag Name and Names
                        </div>
                        <div>
                            $2,500.00
                        </div>
                        <Link to={"/product/details"}>
                            View this bag
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BagList