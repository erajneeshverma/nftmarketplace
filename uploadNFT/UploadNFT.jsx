import React, {useState} from 'react';
import { MdOutlineHttp, MdOutlineAttachFile } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa';
import { AiTwotonePropertySafety } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import Image from 'next/legacy/image';


//internal Import
import formStyle from '../accountPage/Form/Form.module.css';
import Style from './UploadNFT.module.css';
import images from '../img';
import { Button } from '@/components/componentindex';
import { DropZone } from './uploadNFTIndex';




const UploadNFT = () => {
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState("");
  const [properties, setProperties] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const categoryArr=[
    {
      image: images.nft_image_1,
      category: "Digital", 
    },
    {
      image: images.nft_image_2,
      category: "Nature", 
    },
    {
      image: images.nft_image_3,
      category: "Video", 
    },
    {
      image: images.nft_image_2,
      category: "Digital", 
    },
    {
      image: images.nft_image_1,
      category: "Arts", 
    },
    {
      image: images.nft_image_3,
      category: "Photo", 
    },
  ]

  return (
    <div className={Style.upload}>
      <DropZone 
        title="JPG, PNG, WEBM, MAX 100 MB"
        heading="Grag and drop file"
        subHeading="or Browse media on your device"
        itemName={itemName}
        royalties={royalties}
        website={website}
        description={description}
        fileSize={fileSize}
        category={category}
        properties={properties}
        image={images.upload}
      />

      <div className={Style.upload_box}>
       
        <div className={formStyle.Form_box_input}>
            <label htmlFor="nft">Item Name</label>
            <input 
              type="text" 
              placeholder='Rajjo Sinha' 
              className={formStyle.Form_box_input_username} 
              onChange={(e)=>setItemName(e.target.value)}  
            />
        </div>
       
        <div className={formStyle.Form_box_input}>
          <label htmlFor="website">Website</label>
          <div className={formStyle.Form_box_input_box}>
            <div className={formStyle.Form_box_input_box_icon}>
                <MdOutlineHttp />        
            </div>
            <input 
              type="text" 
              placeholder='website' 
              onChange={(e)=>setWebsite(e.target.value)}  
            />
          </div>
          <p className={Style.upload_box_input_para}>
            Ciscrypt will include a link to this URL on this items details page, 
            so that user can click to learn  more about it. You are welcome to link your own webpage with more details.
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea name="" id="" cols="30" rows="6" placeholder='Something about yourself in few words.' onChange={(e)=>setDescription(e.target.value)}></textarea>
          <p className={Style.upload_box_input_para}>
            The description will be included on the items details page underneath its image. Markdown syntax is supported.
          </p>
        </div>  

        <div className={formStyle.Form_box_input}> 
          <label htmlFor="name">Choose collection</label>
          <p className={Style.upload_box_input_para}>
            Choose an exciting collection or create a new one
          </p>

          <div className={Style.upload_box_slider_div}>
            {categoryArr.map((el,i)=>(
              <div 
                key={i+1} 
                className={`${Style.upload_box_slider} ${active==i+1 ? Style.active : ""}`}
                onClick={()=>{setActive(i+1); setCategory(el.category);}}  
              > 
                <div className={Style.upload_box_slider_box}>
                  <div className={Style.upload_box_slider_box_img}>
                    <Image  
                      src={el.image}
                      alt='background image'
                      width={70}
                      height={70}
                      className={Style.upload_box_slider_box_img_img}
                    />
                    
                  </div>
                  <div className={Style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p className={Style.upload_box_input_para}>Crypto Legend - {el.category}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={formStyle.Form_box_input_social}>
          <div className={formStyle.Form_box_input}>
              <label htmlFor="royalties">Royalties</label>
              <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                      <FaPercent />
                  </div>
                  <input type="text" placeholder='20%' onChange={(e)=>setRoyalties(e.target.value)}/>
              </div>
          </div>
          <div className={formStyle.Form_box_input}>
              <label htmlFor="fileSize">File Size</label>
              <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                      <MdOutlineAttachFile />
                  </div>
                  <input type="text" placeholder='180 MB' onChange={(e)=>setFileSize(e.target.value)}/>
              </div>
          </div>
          <div className={formStyle.Form_box_input}>
              <label htmlFor="Propertie">Properties</label>
              <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                      <AiTwotonePropertySafety />
                  </div>
                  <input type="text" placeholder='properties' onChange={(e)=>setProperties(e.target.value)}/>
              </div>
          </div>
        </div>

        
        <div className={Style.upload_box_btn}>
          <Button 
            btnName="Upload"
            handleClick={()=>{}}
            classStyle={Style.upload_box_btn_style}
          />
          <Button 
            btnName="Preview"
            handleClick={()=>{}}
            classStyle={Style.upload_box_btn_style}
          />
        </div>

      </div>
    </div>
  )
}

export default UploadNFT