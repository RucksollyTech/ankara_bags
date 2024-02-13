import { useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { motion } from "framer-motion"
import Carousel from 'react-bootstrap/Carousel';



const ZoomModal = ({setShow,zoom,...props}) => {
    const constraintsRef = useRef(null)
    const {show} = props
    const [zoomBerg,setZoomBerg] = useState(1)
    const [flash,setFlash] = useState(true)
    const zoomControl = (val) =>{
        if (zoomBerg < 2.5 && val === "in") setZoomBerg(zoomBerg + 0.2)
        if (zoomBerg > 1 && val === "out") setZoomBerg(zoomBerg - 0.2)
        if (val === "reset") setZoomBerg(1)
    }
    const adjustScreenSize = () => {
        let screenScale = false
        if(window.innerWidth < 767){
            screenScale = true
        }
        return [screenScale]
    }
    const [Scale] = adjustScreenSize()
    const Controls = () => {
        return (
            <div className="flexZoomBtn p-3">
                <div>
                    <button onClick={()=>zoomControl("in")} className="btn btn-sm btn-primary">Zoom In</button>
                </div>
                <div>
                    <button onClick={()=>zoomControl("out")} className="btn btn-sm btn-secondary mx-4">Zoom Out</button>
                </div>
                <div>
                    <button onClick={()=>zoomControl("reset")} className="btn btn-sm btn-danger">Reset</button>
                </div>
                <img className='pointer' onClick={()=>setShow(false)} width={Scale ? "25" : "40"} height={Scale ? "25" : "40"} src={`https://img.icons8.com/ios/${Scale ? 25 : 40}/cancel.png`} alt="cancel"/>
            </div>
        );
    };
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    useEffect(()=>{
        setFlash(true)
        setZoomBerg(1)
        if (show){
            setTimeout(() => {
                setFlash(false)
            }, 3000);
        }
    },[show])
    return zoom && 
        <Modal fullscreen={true} onHide={() => setShow(false)} {...props}>
            <Modal.Body className='ZOOM'>
                <Controls />
                <motion.div ref={constraintsRef}>
                    <div className={`alert alert-primary text-center font_17 theFlash ${flash ? "" : "d_none"}`}>
                        Click to zoom
                    </div>
                    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
                        {zoom && zoom.map((i,x)=>(
                            <Carousel.Item key={x}>
                                <motion.div 
                                    drag
                                    dragConstraints={constraintsRef} 
                                    className="centerX dag"
                                >
                                    <img style={{
                                        transform: `scale(${zoomBerg})`,
                                        transition : "all 0.5s linear",
                                        cursor: "zoom-in",
                                    }} 
                                        draggable="false"
                                        onClick={()=>zoomControl("in")}
                                        className="img" 
                                        src={i} 
                                        alt="Bag" 
                                    />
                                </motion.div>
                            </Carousel.Item>
                            
                        ))}
                        
                    </Carousel>
                    
                    
                    
                </motion.div>
            </Modal.Body>
        </Modal>
    
}

export default ZoomModal





