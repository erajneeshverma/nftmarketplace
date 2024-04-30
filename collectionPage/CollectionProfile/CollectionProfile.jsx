import React from 'react'
import Image from 'next/legacy/image';
import {
    TiSocialFacebook, 
    TiSocialLinkedin, 
    TiSocialTwitter, 
    TiSocialYoutube, 
    TiSocialInstagram
  } from 'react-icons/ti';
  

import Style from './CollectionProfile.module.css';
import images from '../../img';

const CollectionProfile = () => {
  const cardArray = [1,2,3,4];
  return (
    <div className={Style.collectionProfile}>
        <div className={Style.collectionProfile_box}>
            <div className={Style.collectionProfile_box_left}>
                <Image 
                    src={images.nft_image_2}
                    alt='nft image'
                    width={600}
                    height={600}
                    className={Style.collectionProfile_box_left_img}
                />

                <div className={Style.collectionProfile_box_left_social}>
                    <a href="#">
                        <TiSocialFacebook />
                    </a>
                    <a href="#">
                        <TiSocialInstagram />
                    </a>
                    <a href="#">
                        <TiSocialTwitter />
                    </a>
                    <a href="#">
                        <TiSocialYoutube />
                    </a>
                    <a href="#">
                        <TiSocialLinkedin />
                    </a>
                </div>
            </div>

            <div className={Style.collectionProfile_box_middle}>
                <h1>Awesome NFT Collection</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam facilis in nemo corporis ducimus, minus officiis harum magni excepturi.</p>
                <div className={Style.collectionProfile_box_middle_box}>
                    {cardArray.map((el,i)=>(
                        <div className={Style.collectionProfile_box_middle_box_item} key={i+1}>
                            <small>Floor Price</small>
                            <p>${i+1}95,345</p>
                            <span>+ ${i+1}.14%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>    
    </div>
  )
}

export default CollectionProfile;
