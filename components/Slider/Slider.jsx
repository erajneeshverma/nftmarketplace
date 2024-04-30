import React, {useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion'; 
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';

import images from '../../img';
import Style from './Slider.module.css';
import SliderCard from './SliderCard/SliderCard';

const Slider = () => {
    const sliderArray = [images.creatorbackground10,images.creatorbackground2,images.creatorbackground3,images.creatorbackground8,images.creatorbackground4,images.creatorbackground6,images.creatorbackground9];
    const [width, setWidth] = useState(0);
    const dragSlider = useRef();
    
    useEffect(()=>{
        setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    },[])

    const handleScroll = (direction) => {
        const {current} = dragSlider;
        const ScrollAmount = window.innerWidth > 1800 ? 270 : 210;
        if(direction == "left"){
            current.scrollLeft -= ScrollAmount;
        } else{
            current.scrollLeft += ScrollAmount;
        }
    }
    return (
    <div className={Style.slider}>
        <div className={Style.slider_box}>
            <h2>Explore NFTs Video</h2>
            <div className={Style.slider_box_button}>
                <p>Click on Play icons and enjoy NFTs video</p>
                <div className={Style.slider_box_button_btn}>
                    <div className={Style.slider_box_button_btn_icon} onClick={()=>handleScroll("left")}>
                        <TiArrowLeftThick />        
                    </div>
                    <div className={Style.slider_box_button_btn_icon} onClick={()=>handleScroll("right")}>
                        <TiArrowRightThick />        
                    </div>
                </div>
            </div>
            <motion.div className={Style.slider_box_items} ref={dragSlider}>
                <motion.div ref={dragSlider} className={Style.slider_box_item} drag="x" dragConstraints={{right: 0, left: -width }}>
                    {
                        sliderArray.map((el,i)=>(
                            <SliderCard key={i+1} el={el} i= {i} />
                        ))
                    }
                </motion.div>
            </motion.div>
        </div>    
    </div>
  )
}

export default Slider
