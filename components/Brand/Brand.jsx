import React from 'react'
import Image from 'next/image';

import Style from './Brand.module.css';
import images from '../../img';
import { Button } from '../componentindex';

const Brand = () => {
  return (
    <div className={Style.brand}>
      <div className={Style.brand_box}>
        <div className={Style.brand_box_left}>
          <Image 
            src={images.logo}
            height={100}
            width={100}
            alt='Brand Logo'
          />
          <h1>Earn free crypto with Ciscrypt</h1>
          <p>A creative agency that lead and aspire.</p>
          <div className={Style.brand_box_left_btn}>
            <Button btnName="Create" handleClick={()=>{}} />
            <Button btnName="Discover" handleClick={()=>{}} />
          </div>
        </div>
        <div className={Style.brand_box_right}>
          <Image
            src={images.earn}
            alt='Brand Logo'
            width={800}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default Brand
