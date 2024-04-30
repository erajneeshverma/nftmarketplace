import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

import Style from './SliderCard.module.css';
import images from '../../../img';
import { LikeProfile } from '@/components/componentindex';


const SliderCard = ({el,i}) => {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <Image
            className={Style.sliderCard_box_img_img}
            src={el}
            alt='Slider Profile'
            width={325}
            height={250}
            objectFit='cover'
          />
        </motion.div>
        <div className={Style.sliderCard_box_title}> 
          <p>NFT Video #1245</p>
          <div className={Style.sliderCard_box_title_like}>
            {/* <LikeProfile /> */}
            <small>1 of 100</small>
          </div>
        </div>

        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>1.000 ETH</p>
          </div>
          <div className={Style.sliderCard_box_price_time}>
            <small>Remaining time</small>
            <p>3h : 15m : 20s</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SliderCard
