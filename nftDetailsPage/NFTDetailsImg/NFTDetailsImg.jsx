import React, {useState, useEffect} from 'react'
import Image from 'next/legacy/image';
import { BsImages } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
//internal import
import Style from './NFTDetailsImg.module.css';
import images from '../../img';


const NFTDetailsImg = () => {
  const [description, setDesciption] = useState(true);
  const [like, setLike] = useState(false);
  const [details, setDetails] = useState(true);

  const openDescription = () => {
    if(!description){
      setDesciption(true);
    }else{
      setDesciption(false);
    }
  }
  const openDetails = () => {
    if(!details){
      setDetails(true);
    }else{
      setDetails(false);
    }
  }
  const likeNFT = () => {
    if(!like){
      setLike(true);
    }else{
      setLike(false);
    }
  }
  return (
    <div className={Style.NFTDetailsImg}>
      <div className={Style.NFTDetailsImg_box}>
        <div className={Style.NFTDetailsImg_box_NFT}>
          <div className={Style.NFTDetailsImg_box_NFT_like}>
            <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} />
            <p onClick={()=>likeNFT()}>
              {like ? <AiOutlineHeart className={Style.NFTDetailsImg_box_NFT_like_icon} /> : <AiFillHeart className={Style.NFTDetailsImg_box_NFT_like_icon}/>}
              <span>23</span>
            </p>
            
          </div>
          <div className={Style.NFTDetailsImg_box_NFT_img}>
            <Image 
              src={images.nft_image_1}
              className={Style.NFTDetailsImg_box_NFT_img_img}
              alt="NFT Image"
              width={700}
              height={800}
              objectFit='cover'
            />
          </div>
        </div>

        <div className={Style.NFTDetailsImg_box_description} onClick={()=>openDescription()}>
          <p>Description</p>
          {
            description ? <TiArrowSortedUp /> : <TiArrowSortedDown />
          }
        </div>
        {
          description && (
            <div className={Style.NFTDetailsImg_box_description_box}>
              <p>Tattoed Kitty Gang(KTG) is a collection of 566   badass kitty gangster, with symbol of tattos, living in proud kitty gang metaverse. Each TKG is an 1/1 ID as a gangster member and all the joints right.</p>
            </div>
          )
        }
        <div className={Style.NFTDetailsImg_box_details} onClick={()=>openDetails()}>
          <p>Details</p>
          {
            details ? <TiArrowSortedUp /> : <TiArrowSortedDown />
          }
        </div>
        {
          details && (
            <div className={Style.NFTDetailsImg_box_details_box}>
              <small>2000 x 2000 px.IMAGE(685KB)</small>
              <p>
                <small>Contract Address</small><br />
                0x13KJB32KJB534B6B4K32BKJB3KB5KJB43
              </p>
              <p>
                <small>Token ID</small>
                100300372345
              </p>
            </div>
          )
        }
      </div>  
    </div>
  )
}

export default NFTDetailsImg;
