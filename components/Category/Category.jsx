import React from 'react';
import Image from 'next/legacy/image';
import {BsCircleFill} from 'react-icons/bs';
import images from '../../img';

//internal import
import Style from './Category.module.css';

 
const Category = () => {
    const categoryArray = [images.creatorbackground10,images.creatorbackground2,images.creatorbackground3,images.creatorbackground4,images.creatorbackground5,images.creatorbackground6];
    return(
        <div className={Style.box_category}>
            <div className={Style.category}>
                {categoryArray.map((el,i)=>(
                    <div className={Style.category_box} key={1+i}>
                        <Image 
                            src={el}
                            className={Style.category_box_img}
                            alt='Background Image'
                            width={350}
                            height={150}
                            objectFit='cover'
                        />
                        <div className={Style.category_box_title}>
                            <span><BsCircleFill /></span>
                            <div className={Style.category_box_title_info}>
                                <h4>Entertainment</h4>
                                <small>1995 NFTS</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category;