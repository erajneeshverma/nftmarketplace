import React, {useState, useMemo, useCallback} from 'react'
import Image from 'next/legacy/image';
import { useDropzone } from 'react-dropzone';


//internal import
import Style from '../styles/account.module.css';
import images from '../img';
import Form from '@/accountPage/Form/Form';

const account = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async(acceptedFile) =>{
      setFileUrl(acceptedFile[0]);
  },[])

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 50000000,
  })
  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile Settings.</h1>
        <p>You can set preferred display name create profile URL and other personal settings.</p>
      </div>
      <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()}>
            < input {...getInputProps()} />
            <Image src={images.user5} alt='account upload' width={150} height={150} className={Style.account_box_img_img} />
            <p className={Style.account_box_img_para}>Change Image</p>
        </div>
        <div className={Style.account_box_form}>  
            <Form />
        </div>
      </div>
    </div>
  )
}

export default account;
