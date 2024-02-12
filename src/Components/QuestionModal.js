import React from 'react'
import Modal from 'react-bootstrap/Modal';

const QuestionModal = ({setShow,head,msg,...props}) => {
    return <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <div className='relative questionModal'>
            <div className='font_17'>
                {head}
            </div>
            <img onClick={()=>setShow(false)} className='cancelWishList2' width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/20/delete-sign.png" alt="delete-sign"/>
            <div className="pt-5">
                {msg}
            </div>
            <div className="twoEquo pt-4">
                <button onClick={()=>setShow(false)} className='productButton mr-1'>
                    Close
                </button>
                <button className='productButton xx ml-1'>
                    Remove
                </button>
            </div>
        </div>
    </Modal>
}

export default QuestionModal