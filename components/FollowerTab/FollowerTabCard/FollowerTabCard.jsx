import React, {useState} from 'react';
import Image from 'next/legacy/image';
import images from '../../../img';

import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

//internal import
import Style from './FollowerTabCard.module.css';

 
const FollowerTabCard = ({i,el}) => {
    
    const [following, setFollowing] = useState(false);

    const followMe = () =>{
        if(!following){
            setFollowing(true);
        }else{
            setFollowing(false);
        }
    }
    return(
        <div className={Style.followerTabCard}>
            <div className={Style.followerTabCard_rank}>
                <p>
                    #{i+1} <span>🥇</span>
                </p>
            </div>

            <div className={Style.followerTabCard_box}>
                <div className={Style.followerTabCard_box_img}>
                    <Image
                        className={Style.followerTabCard_box_img_img}
                        src={el.background}
                        alt='Profile Background'
                        width={500}
                        height={300}
                    />
                </div>

                <div className={Style.followerTabCard_box_profile}>
                    <Image
                        className={Style.followerTabCard_box_profile_img}
                        src={el.user}
                        alt='Profile Background'
                        width={50}
                        height={50}
                    />
                </div>
                <div className={Style.followerTabCard_box_info}>
                    <div className={Style.followerTabCard_box_info_name}>
                        <h4>Rajnish Verma {" "} <span><MdVerified /></span></h4>
                        <p>12.345 ETH</p>
                    </div>
                    <div className={Style.followerTabCard_box_info_following}>
                        {
                            following ? (
                                <a onClick={() => followMe()}>
                                    Follow{" "} <span><TiTick /></span>
                                </a>
                            ) : (
                                <a onClick={()=> followMe()}>
                                    Following
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowerTabCard;