import React from 'react'

//internal Import
import Style from './HeroSection.module.css';
import images from '../../img';

//external Import
import Image from 'next/image';
import { Button } from '../componentindex';

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
        <div className={Style.heroSection_box}>
            <div className={Style.heroSection_box_left}>
                <h1>Discover, Collect, and Sell NFTs 🖼️</h1>
                <p>Discover the most outstanding NFTs in all topics of life. Create Your NFTs and sell them.</p>
                <Button btnName="Start your search" handleClick={()=>{}} />
            </div>
            <div className={Style.heroSection_box_right}>
                <Image
                    src={images.hero}
                    alt='Hero Section'
                    width={600}
                    height={600}
                />
            </div>
        </div>
    </div>
  )
}

export default HeroSection;