import React, {useState} from 'react'
import { MdOutlineHttp, MdOutlineAttachFile } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa'; 
import { AiTwotonePropertySafety } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import Image from 'next/legacy/image';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';


//internal import
import Style from './UploadNFT.module.css';
import images from '../img';
import formStyle from '../accountPage/Form/Form.module.css';
import { Button } from '@/components/componentindex';
import { DropZone } from './uploadNFTIndex';


const UploadNFT = () => {
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
<<<<<<< HEAD
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState("");
  const [properties, setProperties] = useState("");
=======
  const [royalities, setRoyalities] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState(0);
>>>>>>> 4f6941fbe137312b8ffefb6d4fead5a3fc01bff6

  const categoryArr = [
    {
      image: images.nft_image_1,
      category: "Sports"
    },
    {
      image: images.nft_image_3,
<<<<<<< HEAD
      category: "Arts"
=======
      category: "Sports"
>>>>>>> 4f6941fbe137312b8ffefb6d4fead5a3fc01bff6
    },
    {
      image: images.nft_image_2,
      category: "Digital"
    },
    {
      image: images.nft_image_3,
      category: "TIme"
    },
    {
      image: images.nft_image_1,
      category: "Photography"
    }
  ]

  return (
    <div className={Style.upload}>
      <DropZone title="JPG, PNG,  WEBM, MAX 100 MB"
        heading="Drag and Drop file"
        subHeading="or browse media on your device"
        itemName={itemName}
        website={website}
        description={description}
<<<<<<< HEAD
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        properties={properties}
=======
        royalities={royalities}
        fileSize={fileSize}
        category={category}
>>>>>>> 4f6941fbe137312b8ffefb6d4fead5a3fc01bff6
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
<<<<<<< HEAD
              <input type="text" placeholder='website' onChange={(e)=>setWebsite(e.target.value)}   />
          </div>
        
          <p className={Style.upload_box_input_para}>
=======
              <input type="text" placeholder='website' onChange={(e)=>setItemName(e.target.value)}   />
          </div>
        
          <p className={formStyle.upload_box_input_para}>
>>>>>>> 4f6941fbe137312b8ffefb6d4fead5a3fc01bff6
            Ciscrypt will include a link to this URL on this item's details page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.
          </p>
       
          <div className={formStyle.Form_box_input}>
              <label htmlFor="description">Description</label>
<<<<<<< HEAD
              <textarea onChange={(e) => setDescription(e.target.value)}   name="" id="" cols="30" rows="6" placeholder='Something about yourself in few words.'></textarea>
              <p className={Style.upload_box_input_para}>
=======
              <textarea name="" id="" cols="30" rows="6" placeholder='Something about yourself in few words.'></textarea>
              <p>
>>>>>>> 4f6941fbe137312b8ffefb6d4fead5a3fc01bff6
                The description will be inclued in the items details page underneath its image. MarkDown syntax is supported.
              </p>
          </div>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Choose Collection</label>
          <p className={Style.upload_box_input_para}>
            Choose an exciting collection or create a new one
          </p>

<<<<<<< HEAD
          <div className={Style.upload_box_slider_div}>
            {categoryArr.map((el,i)=>(
                <div 
                  className={`${Style.upload_box_slider} ${active == i+1 ? Style.active : "" }`}
                  key={i+1}
                  onClick={() => {
                    setActive(i + 1);
                    setCategory(el.category);
                  }}
=======
          <div className={Style.upload_box_slider_dev}>
            {
              categoryArr.map((el,i)=>(
                <div 
                  className={`${Style.upload_box_slider} ${active == i+1 ? Style.active : "" }`}
                  key={i+1}
                  onClick={(() => setActive(i+1), setCategory(el.category))}
>>>>>>> 4f6941fbe137312b8ffefb6d4fead5a3fc01bff6
                  >

                  <div className={Style.upload_box_slider_box}>
                    <div className={Style.upload_box_slider_box_img}>
                      <Image 
                        src={el.image}
                        alt='background Image'
                        width={70}
                        height={70}
                        className={Style.upload_box_slider_box_img_img}
                      />
                    </div>  
                    <div className={Style.upload_box_slider_box_img_icon}>
                      <TiTick />
                    </div>
<<<<<<< HEAD
                  </div>
                  <p>Crypto Legend - {el.category}</p>
                </div>
              ))}
          </div>
        </div>

        <div className={formStyle.Form_box_input_social}>
            <div className={formStyle.Form_box_input}>
                <label htmlFor="Royalties">Royalties</label>
                <div className={formStyle.Form_box_input_box}>
                    <div className={formStyle.Form_box_input_box_icon}>
                        <FaPercent />
                    </div>
                    <input type="text" placeholder='20%' onChange={(e)=>setRoyalties(e.target.value)}/>
                </div>
            </div>
            <div className={formStyle.Form_box_input}>
                <label htmlFor="size">Size</label>
                <div className={formStyle.Form_box_input_box}>
                    <div className={formStyle.Form_box_input_box_icon}>
                        <MdOutlineAttachFile />
                    </div>
                    <input type="text" placeholder='165 MB' onChange={(e)=>setFileSize(e.target.value)}/>
                </div>
            </div>
            <div className={formStyle.Form_box_input}>
                <label htmlFor="Propertie">Propertie</label>
                <div className={formStyle.Form_box_input_box}>
                    <div className={formStyle.Form_box_input_box_icon}>
                        <AiTwotonePropertySafety />
                    </div>
                    <input type="text" placeholder='propertie' onChange={(e)=>setProperties(e.target.value)} />
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
=======
                    <p>Crypto Legend - Professor</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
                <label htmlFor="facebook">Facebook</label>
                <div className={Style.Form_box_input_box}>
                    <div className={Style.Form_box_input_box_icon}>
                        <TiSocialFacebook />
                    </div>
                    <input type="text" placeholder='http://rajjo'/>
                </div>
            </div>
            <div className={Style.Form_box_input}>
                <label htmlFor="twitter">Twitter</label>
                <div className={Style.Form_box_input_box}>
                    <div className={Style.Form_box_input_box_icon}>
                        <TiSocialTwitter />
                    </div>
                    <input type="text" placeholder='http://rajjo'/>
                </div>
            </div>
            <div className={Style.Form_box_input}>
                <label htmlFor="instagram">Instagram</label>
                <div className={Style.Form_box_input_box}>
                    <div className={Style.Form_box_input_box_icon}>
                        <TiSocialInstagram />
                    </div>
                    <input type="text" placeholder='http://rajjo'/>
                </div>
            </div>
        </div>
>>>>>>> 4f6941fbe137312b8ffefb6d4fead5a3fc01bff6
      </div>
    </div>
  )
}

export default UploadNFT;
