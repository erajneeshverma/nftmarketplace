import React from 'react'
import {
    TiSocialFacebook, 
    TiSocialLinkedin, 
    TiSocialTwitter, 
    TiSocialYoutube, 
    TiSocialInstagram, 
    TiArrowSortedDown,
    TiArrowSortedUp
  } from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';

//internal import
import Style from '../styles/contactus.module.css';
import formStyle from '../accountPage/Form/Form.module.css';
import { Button } from '@/components/componentindex';


const contactus = () => {
  return (
    <div className={Style.contactus}>
        <div className={Style.contactus_box}>
            <h1>Contact</h1>
            <div className={Style.contactus_box_box}>
                <div className={Style.contactus_box_box_left}>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>🏡 ADDRESS</h3>
                        <p>Photo booth tattoed prism, portland taiyaki hoodie neutron typewritter</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>📧 EMAIL</h3>
                        <p>rv.example@example.com</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>📱 PHONE</h3>
                        <p>000-123-457-7890</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>🌎 SOCIAL</h3>
                        <a href="#">
                            <TiSocialFacebook />
                        </a>
                        <a href="#">
                            <TiSocialInstagram />
                        </a>
                        <a href="#">
                            <TiSocialInstagram />
                        </a>
                        <a href="#">
                            <TiSocialTwitter />
                        </a>
                        <a href="#">
                            <TiSocialYoutube />
                        </a>
                    </div>
                </div>
                <div className={Style.contactus_box_box_right}>
                    <form>
                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" placeholder='Full Name' className={formStyle.Form_box_input_username} />
                        </div>
                        <div className={formStyle.Form_box_input}> 
                            <label htmlFor="email">Email</label>
                            <div className={formStyle.Form_box_input_box}> 
                                <div className={formStyle.Form_box_input_box_icon}> 
                                    <HiOutlineMail />
                                </div>
                                <input type="text" placeholder='Email*' />
                            </div>
                        </div>
                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="message">Message</label>
                            <textarea name="" id="" cols="30" rows="6" placeholder='Something about yourself in few words.'></textarea>
                        </div>
                        <Button 
                            btnName="Send Message"
                            handleClick={()=>{}}
                            classStyle={Style.button}
                        />
                    </form>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default contactus;