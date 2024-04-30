import React from 'react'
import Image from 'next/image';

//internal import

import Style from './Notification.module.css';
import image from '../../../img';


const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image 
            src = {image.user1}
            alt='Profile Image'
            height={50}
            width={50}
            className={Style.notification_box_img}
            />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Rajnish Kumar Verma</h4>
          <p>Measure action your user ...</p>
          <small>3 Min Ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  )
}

export default Notification;