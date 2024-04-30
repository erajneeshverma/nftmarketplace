import React from 'react'
import Image from 'next/legacy/image';

import Style from './Banner.module.css';


const Banner = ({bannerImage}) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image 
          src={bannerImage} 
          width={1350} 
          height={300}
          objectFit='cover'
          alt='background' 
        />
      </div> 
      <div className={Style.banner_img_mobile}>
        <Image 
          src={bannerImage} 
          width={1600} 
          height={900}
          objectFit='cover'
          alt='background' 
        />
      </div> 
    </div>
  )
}

export default Banner;
