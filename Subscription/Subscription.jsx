import React from 'react'
import { TiTick } from 'react-icons/ti';
import { Button } from '@/components/componentindex';

//internal import
import Style from './Subscription.module.css';


const Subscription = ({el,i}) => {
  return (
    <div className={Style.SubscriptioBox}>
        <div className={Style.SubscriptioBox_box}>
            <span className={Style.SubscriptioBox_box_span}>{el.plan}</span>
            <small className={Style.SubscriptioBox_box_small}>{el.popular || ""}</small>
            <p className={Style.SubscriptioBox_box_price}>{el.price}</p>
            <div className={Style.SubscriptioBox_box_info}>
            {el.service.map((el,i)=>(
                <p key={i+1} className={Style.SubscriptioBox_box_para_info}>
                    <span><TiTick/></span>
                    {el}
                </p>
            ))}
            </div>
            <Button btnName="Submit" handleClick={()=>{}}  classStyle={Style.button}/>
        </div>
    </div>
  )
}

export default Subscription;