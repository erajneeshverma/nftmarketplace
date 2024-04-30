import React from 'react'


//internal import
import Style from './Service.module.css';

//external import
import Images from '../../img';
import Image from 'next/image';

const Service = () => {
  return (
    <div className={Style.service}>
        <div className={Style.service_box}>
            <div className={Style.service_box_item}>
                <Image src={Images.service1} alt='Filter and Discover' width={100} height={100} />
                <p className={Style.service_box_item_step}>
                    <span>Step 1</span>
                </p>
                <h3>Filter & Discover</h3>
                <p>Connect with wallet, discover, buy NFTs, sell your NFTs and earn money.</p>
            </div>
            <div className={Style.service_box_item}>
                <Image src={Images.service2} alt='Filter and Discover' width={100} height={100} />
                <p className={Style.service_box_item_step}>
                    <span>Step 2</span>
                </p>
                <h3>Create and Buy</h3>
                <p>Connect with wallet, discover, buy NFTs, sell your NFTs and earn money.</p>
            </div>
            <div className={Style.service_box_item}>
                <Image src={Images.service3} alt='Connect Wallet' width={100} height={100} />
                <p className={Style.service_box_item_step}>
                    <span>Step 3</span>
                </p>
                <h3>Connect Wallet</h3>
                <p>Connect with wallet, discover, buy NFTs, sell your NFTs and earn money.</p>
            </div>
            <div className={Style.service_box_item}>
                <Image src={Images.service4} alt='Filter and Discover' width={100} height={100} />
                <p className={Style.service_box_item_step}>
                    <span>Step 4</span>
                </p>
                <h3>Start Trading</h3>
                <p>Connect with wallet, discover, buy NFTs, sell your NFTs and earn money.</p>
            </div>
        </div>
    </div>
  )
}

export default Service;