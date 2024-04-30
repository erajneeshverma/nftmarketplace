import React from 'react';
import Image from 'next/legacy/image';
import {BsCircleFill} from 'react-icons/bs';
import images from '../../img';

//internal import
import Style from './LikeProfile.module.css';

 
const LikeProfile = () => {
    const imageArray = [images.user1,images.user2,images.user3,images.user4];
    return(
        <div className={Style.like}>
            {
                imageArray.map((el,i)=>(
                    <div className={Style.like_box} key={i+1}>
                        <Image className={Style.like_img} src={el} width={15} height={15} />
                    </div>
                ))
            }
        </div>
    )
}

export default LikeProfile;