
import React,{useState, useCallback} from 'react'
import Image from 'next/legacy/image';

//internal import
import Style from './DropZone.module.css';
import images from '../../img';
import { useDropzone } from 'react-dropzone';



const DropZone = ({title, heading, subHeading, itemName, website, description, royalties, fileSize, category, image, properties}) => {
  
  const [fileUrl,setFileUrl] = useState(null);
  const onDrop = useCallback(async(acceptedFile) =>{
    setFileUrl(acceptedFile[0]);
  })

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: "images/*",
    maxSize: 5000000,
  });

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            <Image src={image} alt='upload' width={100} height={100} objectFit="contain" className={Style.DropZone_box_input_img_img} />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div> 
      {fileUrl && (
        <aside className={Style.DropZone_box_aside}> 
          <div className={Style.DropZone_box_aside_box}>
            <Image
              src={images.nft_image_1}
              alt='nft image'
              width={200}
              height={200}
            />

            <div className={Style.DropZone_box_aside_box_preview}>
              <div className={Style.DropZone_box_aside_box_preview_one}>
                <p>
                  <span>NFT Name:</span>
                  {itemName || ""}                  
                </p>
                <p>
                  <span>Website:</span>
                  {website || ""}
                </p>
              </div>
              <div className={Style.DropZone_box_aside_box_preview_two}>
                <p>
                  <span>Description:</span>
                  {description || ""}                  
                </p>
              </div>

              <div className={Style.DropZone_box_aside_box_preview_three}>
                <p>
                  <span>Royalties:</span>
                  {royalties || ""}                  
                </p>
                <p>
                  <span>File Size:</span>
                  {fileSize || ""}                  
                </p>
                <p>
                  <span>Properties:</span>
                  {properties || ""}                  
                </p>
              </div>
              <div className={Style.DropZone_box_aside_box_preview_four}>
                <p>
                  <span>Category:</span>
                  {category || ""}                  
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
)}
export default DropZone;
