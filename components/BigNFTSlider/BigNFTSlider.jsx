import React,{useState,useEffect,useCallback} from 'react'
import Image from 'next/image';
import {AiFillFire, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {MdVerified, MdTimer} from 'react-icons/md';
import {TbArrowBigLeftLines, TbArrowBigRightLine, TbArrowBigRightLines} from 'react-icons/tb';

//internal import
import Style from './BigNFTSlider.module.css';
import images from '../../img';
import Button from '../Button/Button';

const BigNFTSlider = () => {
    const [idNumber, serIdNumber] = useState(1);

    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Rajnish Verma",
            Collection: "Gym",
            price: "00000064664 ETH",
            like: 243,
            image: images.user1,
            nftImage: images.nft_image_3,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35,
            }
        },
        {
            title: "Buddy NFT",
            id: 2,
            name: "Sweta Verma",
            Collection: "Jewelary",
            price: "00000063432 ETH",
            like: 545,
            image: images.user2,
            nftImage: images.nft_image_2,
            time: {
                days: 365,
                hours: 32,
                minutes: 45,
                seconds: 11,
            }
        },
        {
            title: "Puppy NFT",
            id: 3,
            name: "Vishnu Verma",
            Collection: "Medicine",
            price: "00000064776 ETH",
            like: 123,
            image: images.user3,
            nftImage: images.nft_image_2,
            time: {
                days: 24,
                hours: 9,
                minutes: 54,
                seconds: 32,
            }
        },
        {
            title: "Image Art NFT",
            id: 4,
            name: "Shivam Verma",
            Collection: "Art",
            price: "00000094776 ETH",
            like: 999,
            image: images.user4,
            nftImage: images.nft_image_3,
            time: {
                days: 89,
                hours: 23,
                minutes: 12,
                seconds: 59,
            }
        }
    ]

    const inc = useCallback(()=>{
        if(idNumber+1<sliderData.length){
            serIdNumber(idNumber+1);
        }
    },[idNumber, sliderData.length])

    const dec = useCallback(()=>{
        if(idNumber>0){
            serIdNumber(idNumber-1);
        }
    },[idNumber, sliderData.length])

    useEffect(()=>{
        inc();
    },[]);

  return (
    <div className={Style.bigNFTSlider}>
        <div className={Style.bigNFTSlider_box}>
            <div className={Style.bigNFTSlider_box_left}>
                <h2>{sliderData[idNumber].title}</h2>
                <div className={Style.bigNFTSlider_box_left_creator}>
                    <div className={Style.bigNFTSlider_box_left_creator_profile}>
                        <Image
                            className={Style.bigNFTSlider_box_left_creator_profile_img} 
                            src={sliderData[idNumber].image} 
                            alt='Profile Image'  
                            width={50} 
                            height={50}
                        />
                        <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                            <p>Creator</p>
                            <h4>{sliderData[idNumber].name}{" "} <span><MdVerified /></span></h4>
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_creator_collection}>
                        <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon} />
                        <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                            <h4>Collection</h4>
                            <h4>{sliderData[idNumber].Collection}</h4>
                        </div>
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_left_bidding}>
                    <div className={Style.bigNFTSlider_box_left_bidding_box}>
                        <small>Current Bid</small>
                        <p>{sliderData[idNumber].price} <span>$221,21</span></p>
                    </div>
                    <p className={Style.bigNFTSlider_box_left_bidding_box_aution}>
                        <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon} />
                        <span>Auction ending in</span>
                    </p>
                    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}  >
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.days}</p>
                            <span>Days</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.hours}</p>
                            <span>Hours</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.minutes}</p>
                            <span>Minutes</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.seconds}</p>
                            <span>Sec</span>
                        </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_button}>
                        <Button btnName="Place" handleClick={()=>{}} />
                        <Button btnName="View" handleClick={()=>{}} />
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                    <TbArrowBigLeftLines 
                        className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                        onClick={()=>dec()}
                    />
                    <TbArrowBigRightLine 
                        className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                        onClick={()=>inc()}
                    />
                </div>
            </div>

            <div className={Style.bigNFTSlider_box_right}>
                <div className={Style.bigNFTSlider_box_right_box}>
                    <Image src={sliderData[idNumber].nftImage} alt='NFT IMAGE' className={Style.bigNFTSlider_box_right_box_img} />
                    <div className={Style.bigNFTSlider_box_right_box_like}>
                        <AiFillHeart />
                        <span>{sliderData[idNumber].like}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigNFTSlider;