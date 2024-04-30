import React from 'react';
import Image from 'next/legacy/image';

//internal import
import Style from './DaysComponents.module.css';
import images from '../../../img';
import { MdVerified } from 'react-icons/md';

 
const DaysComponents = ({el,i}) => {
    return(
        <div className={Style.daysComponent}>
            <div className={Style.daysComponent_box}>
                <div className={Style.daysComponent_box_img}>
                    <Image
                        src={el.background}
                        className={Style.daysComponent_box_img_img}
                        alt='Profile Background'
                        width={500}
                        height={300}
                        objectFit='covera'
                    />
                </div>
                <div className={Style.daysComponent_box_profile}>
                    <Image 
                        src={el.background}
                        alt='Profile'
                        width={200}
                        height={200}
                        className={Style.daysComponent_box_img_1}
                        objectFit='covers'
                    />

                    <Image 
                        src={el.background}
                        alt='Profile'
                        width={200}
                        height={200}
                        className={Style.daysComponent_box_img_2}
                        objectFit='covers'
                    />
                    <Image 
                        src={el.background}
                        alt='Profile'
                        width={200}
                        height={200}
                        className={Style.daysComponent_box_img_3}
                        objectFit='covers'
                    />
                </div>
                <div className={Style.daysComponent_box_title}>
                    <h2>Amazing Collection</h2>
                    <div className={Style.daysComponent_box_title_info}>
                        <div className={Style.daysComponent_box_title_info_profile}>
                            <Image 
                                src={el.user}
                                alt='profile'
                                width={30}
                                height={30}
                                objectFit='covers'
                                className={Style.daysComponent_box_title_info_profile_img}
                            />

                            <p>Creator
                                <span>Rajnish <small><MdVerified /></small></span>
                            </p>
                        </div>

                        <div className={Style.daysComponent_box_title_info_price}>
                            <small>1.225 ETH</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaysComponents;