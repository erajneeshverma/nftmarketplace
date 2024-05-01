import React,{useState, useEffect} from 'react'
import Image from 'next/legacy/image';


//internal import
import Style from '../styles/connectWallet.module.css';
import images from '../img';

const connectWallet = () => {
    
    const [activeBtn, setActiveBtn] = useState(0);

    const providerArr=[
        {
            provider: images.Provider1,
            name: "Metmask",
        },
        {
            provider: images.Provider2,
            name: "Exodus",
        },
        {
            provider: images.Provider3,
            name: "WazirX",
        },
        {
            provider: images.Provider4,
            name: "Crypto.com",
        },
    ]
  return (
    <div className={Style.connectWallet}>
        <div className={Style.connectWallet_box}>
            <h1>Connect Your Wallet</h1>
            <p className={Style.connectWallet_box_para}>
                Connect with one of available wallet provider or create a new one 
            </p>
            <div className={Style.connectWallet_box_provider}>
                {
                    providerArr.map((el,i)=>(
                        <div 
                            key={i+1} 
                            onClick={()=>setActiveBtn(i+1)} 
                            className={`${Style.connectWallet_box_provider_item} ${activeBtn== i+1 ? Style.active : ""}`}>
                            
                            <Image
                                src={el.provider}
                                alt={el.name}
                                width={50}
                                height={50}
                                className={Style.connectWallet_box_provider_item_img}
                            />
                            <p>{el.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default connectWallet;