import React from 'react'

import Style from '../styles/upload-nft.module.css';
import { UploadNFT } from '@/uploadNFT/uploadNFTIndex';

const uploadnft = () => {
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>You can set preferred display name, create your profile URL and manage other personal setting.</p>
        </div>
        
        <div className={Style.uploadNFT_box_title}>
          <h2>Image, Video, Audio, or 3D Model</h2>
          <p>Files types supported: JPG, PNG, JIF, SVG, MP4, WEBM, GLB, GLTF. Max size: 100 MB</p>
        </div>

        <div className={Style.uploadNFT_box_form}>
          <UploadNFT />
        </div>
      </div>  
    </div>
  )
}

export default uploadnft;
