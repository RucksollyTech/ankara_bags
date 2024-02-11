import React from 'react'
import BagList from './Components/BagList'

const Home = () => {
    return (
        <div>
            <div className='standardWidth'>
                <div className="landing">
                    <div className="header1">
                        <h1>
                            Best-Selling Handbags
                        </h1>
                    </div>
                    <div className="pt-3 font_14">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui nihil ipsa odit molestiae adipisci? Possimus, vero magni? A quia totam rem quam adipisci asperiores voluptate doloribus quisquam veniam? A, eos fuga? Maiores aut numquam sunt corrupti commodi ducimus dignissimos illo nisi nulla, voluptatibus perferendis nesciunt a inventore eos quidem debitis vitae vero tempore. Delectus illo nostrum ipsam animi mollitia?
                    </div>
                </div>
            </div>
            <BagList />
        </div>
    )
}

export default Home