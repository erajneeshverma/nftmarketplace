
import React,{useState} from 'react';
import Image from 'next/legacy/image';
import { MdVerified, MdCloudUpload, MdTimer, MdReportProblem, MdOutlineDeleteSweep } from 'react-icons/md'; 
import { BsThreeDots } from 'react-icons/bs';
import { FaWallet, FaPercentage } from 'react-icons/fa';
import {
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialYoutube, 
  TiSocialInstagram, 
  TiArrowSortedDown,
  TiArrowSortedUp
} from 'react-icons/ti';
import {BiTransferAlt, BiDollar} from 'react-icons/bi';

//internal import
import Style from './NFTDescription.module.css';
import images from '../../img';
import { Button } from '@/components/componentindex';
import { NFTTabs } from '../nftdetailspageindex';


const NFTDescription = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provonance, setProvonance] = useState(false);
  const [owner, setOwner] = useState(false);

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user8,
    images.user9,
    images.user10
  ]
  const provonanceArray = [
    images.user4,
    images.user5,
    images.user6,
    images.user7,
    images.user2,
    images.user10
  ]
  
  const ownerArray = [
    images.user10,
    images.user5,
    images.user2,
    images.user8,
    images.user9,
    images.user7
  ]

  const openSocial = () =>{
    if(!social){
      setSocial(true);
      setNFTMenu(false);
    }else{
      setSocial(false);
    }
  }

  const openNFTMenu = () => {
    if(!NFTMenu){
      setNFTMenu(true);
      setSocial(false);
    }else{
      setNFTMenu(false);
    }
  }

  const openTabs = (e) => {
    console.log(e.target.innerText);
    const btnText = e.target.innerText;
    if(btnText === 'Bid History'){
      setHistory(true);
      setOwner(false);
      setProvonance(false);
    }else if(btnText == 'Provonance'){
      setHistory(false);
      setOwner(false);
      setProvonance(true);
    }
  }

  const openOwner = () => {
    if(!owner){
      setHistory(false);
      setOwner(true);
      setProvonance(false);
    }else{
      setOwner(false);
      setHistory(true);
    }
  }
  
  

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* {part one} */}
        <div className={Style.NFTDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload className={Style.NFTDescription_box_share_box_icon} onClick={()=>openSocial()}/>
            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> FaceBook
                </a>
                <a href="#">
                  <TiSocialLinkedin /> LikedIn
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> YouTube
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instagram
                </a>
              </div>
            )}
            <BsThreeDots className={Style.NFTDescription_box_share_box_icon} onClick={()=>openNFTMenu()} />
            {
              NFTMenu && (
                <div className={Style.NFTDescription_box_share_box_social}>
                  <a href="#">
                    <BiDollar /> Change Price
                  </a>
                  <a href="#">
                    <BiTransferAlt /> Transfer
                  </a>
                  <a href="#">
                    <MdReportProblem /> Report Problem
                  </a>
                  <a href="#">
                    <MdOutlineDeleteSweep /> Delete Item
                  </a>
                </div>
              )
            }
          </div>
        </div>
        {/* //part two */}
        <div className={Style.NFTDescription_box_profile}>
          <h1>BearX #234</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image src={images.user1} alt='Profile' width={40} height={40} className={Style.NFTDescription_box_profile_box_left_img}/>
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small><br />
                <span> Rajnish verma <MdVerified /></span> 
              </div>
            </div>  
            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image src={images.user2} alt='Profile' width={40} height={40} className={Style.NFTDescription_box_profile_box_left_img}/>
              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Creator</small> <br />
                <span> Sweta Verma  <MdVerified /></span>
              </div>
            </div>
          </div>
        

          <div className={Style.NFTDescription_box_profile_biding}>
            <p>
              <MdVerified /> <span>Auction ending in:</span>
            </p>
            <div className={Style.NFTDescription_box_profile_biding_box_timer}>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>2</p>
                <span>Days</span>
              </div> 
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>20</p>
                <span>hours</span>
              </div> 
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>43</p>
                <span>minutes</span>
              </div> 
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>32</p>
                <span>Secs</span>
              </div>            
            </div>

            <div className={Style.NFTDescription_box_profile_biding_box_price}>
              <div className={Style.NFTDescription_box_profile_biding_box_price_bid}>
                <small>Current Bid</small>
                <p>1.000 ETH <span>( = $5,232.23)</span></p>
              </div> 
              <span> 96 in stock </span>
            </div> 
            
            <div className={Style.NFTDescription_box_profile_biding_box_button}>
              <Button icon=<FaWallet/> btnName="Place a bid" handleClick={()=>{}} classStyle={Style.button} />
              <Button icon=<FaPercentage/> btnName="Make Offer" handleClick={()=>{}} classStyle={Style.button} />
            </div> 
            <div className={Style.NFTDescription_box_profile_biding_box_tabs} >
              <button onClick={(e)=>openTabs(e)}>Bid History</button>
              <button onClick={(e)=>openTabs(e)}>Provonance</button>
              <button onClick={(e)=>openOwner(e)}>Owner</button>
            </div>
            {
              history && (
                <div className={Style.NFTDescription_box_profile_biding_box_card}>
                  <NFTTabs dataTab={historyArray} />
                </div>
              )
            }
            {
              provonance && (
                <div className={Style.NFTDescription_box_profile_biding_box_card}>
                  <NFTTabs dataTab={provonanceArray} />
                </div>
              )
            }
            {
              owner && (
                <div className={Style.NFTDescription_box_profile_biding_box_card}>
                  <NFTTabs dataTab={ownerArray} icon=<MdVerified/> />
                </div>
              )
            }
          </div>
        </div> 
      </div>  
    </div>
  )
}

export default NFTDescription;
