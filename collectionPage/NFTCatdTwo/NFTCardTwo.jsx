import React, {useState} from 'react'
import Image from 'next/legacy/image';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';


import Style from './NFTCardTwo.module.css';
import { LikeProfile } from '@/components/componentindex';


const NFTCardTwo = ({NFTData}) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);
  const likeNFT = () => {
    if(!like){
      setLike(true);
      setLikeInc(likeInc+1);
    }else{
      setLike(false);
      setLikeInc(likeInc-1);
    }
  }
  return (
    <div className={Style.nftcardtwo}>
      {NFTData.map((el,i)=>(
        <div className={Style.nftcardtwo_box} key={i+1}>
          <div className={Style.nftcardtwo_box_like}>
            <div className={Style.nftcardtwo_box_like_box}>
              <div className={Style.nftcardtwo_box_like_box_box}>
                <BsImage className={Style.nftcardtwo_box_like_box_box_icon} />
                <p onClick={()=> likeNFT()}>
                  {like?<AiOutlineHeart/>:<AiFillHeart/>}{" "}
                  <span>{likeInc+1}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={Style.nftcardtwo_box_img}>
            <Image 
              src={el}
              alt='NFT'
              width={500}
              height={500}
              objectFit='cover'
              className={Style.nftcardtwo_box_img_img}
            />
          </div>
          <div className={Style.nftcardtwo_box_info}>
            <div className={Style.nftcardtwo_box_info_left}>
              <LikeProfile />
              <p>Clone #{i+1}</p>
            </div>
            <small>4{i+1}</small>
          </div>
          <div className={Style.nftcardtwo_box_price}>
            <div className={Style.nftcardtwo_box_price_box}>
              <small>Current Bid</small>
              <p>1{i+1}.03{i+1} ETH</p>
            </div>
            <p className={Style.nftcardtwo_box_price_stock}>
              <MdTimer /> <span>{i+1} hours left</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NFTCardTwo;
