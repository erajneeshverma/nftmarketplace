import React from 'react'


//internal import
import Style from './NFTDetailsPage.module.css';
import { NFTDescription, NFTDetailsImg } from './nftdetailspageindex';

const NFTDetailsPage = () => {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTDetailsImg />
        <NFTDescription />
      </div>  
    </div>
  )
}

export default NFTDetailsPage;
