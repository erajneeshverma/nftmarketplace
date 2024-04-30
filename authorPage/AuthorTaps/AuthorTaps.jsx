import React,{useState} from 'react'
import Image from 'next/legacy/image';
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from 'react-icons/ti';


import Style from './AuthorTaps.module.css';
import images from '../../img';


const AuthorTaps = ({setCollectibles,setCreated,setLike, setFollwer, setFollowing }) => {
  const [openList,setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created by Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openDropDownList = () => {
    if(!openList){
      setOpenList(true);
    }else{
      setOpenList(false);
    }
  }

  const openTab = (e) => {
    const btnText = e.target.innerText;
    if(btnText == "Collectibles"){
      setCollectibles(true);
      setCreated(false);
      setLike(false);
      setFollowing(false);
      setFollwer(false);
      setActiveBtn(1);
    }else if(btnText == "Created"){
      setCollectibles(false);
      setCreated(true);
      setLike(false);
      setFollowing(false);
      setFollwer(false);
      setActiveBtn(2);
    }else if(btnText == "Liked"){
      setCollectibles(false);
      setCreated(false);
      setLike(true);
      setFollowing(false);
      setFollwer(false);
      setActiveBtn(3);
    }else if(btnText == "Follower"){
      setCollectibles(false);
      setCreated(false);
      setLike(false);
      setFollowing(false);
      setFollwer(true);
      setActiveBtn(4);
    }else if(btnText == "Following"){
      setCollectibles(false);
      setCreated(false);
      setLike(false);
      setFollowing(true);
      setFollwer(false);
      setActiveBtn(5);
    }
  }

  return (
    <div className={Style.AuthorTaps}>
      <div className={Style.AuthorTaps_box}>
        <div className={Style.AuthorTaps_box_left}>
          <div className={Style.AuthorTaps_box_left_btn}>
            <button className={`${activeBtn == 1 ? Style.active: ""}`} onClick={(e)=>openTab(e)}>Collectibles</button>
            <button className={`${activeBtn == 2 ? Style.active: ""}`} onClick={(e)=>openTab(e)}>Created</button>
            <button className={`${activeBtn == 3 ? Style.active: ""}`} onClick={(e)=>openTab(e)}>Liked</button>
            <button className={`${activeBtn == 4 ? Style.active: ""}`} onClick={(e)=>openTab(e)}>Follower</button>
            <button className={`${activeBtn == 5 ? Style.active: ""}`} onClick={(e)=>openTab(e)}>Following</button>
          </div>
        </div>
        <div className={Style.AuthorTaps_box_right}>
          <div className={Style.AuthorTaps_box_right_para} onClick={()=>openDropDownList()}>
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
          {openList && (
            <div className={Style.AuthorTaps_box_right_list}>
              {
                listArray.map((el,i)=>(
                  <div key={i+1}  onClick={()=> setSelectedMenu(el)} className={Style.AuthorTaps_box_right_list_item}>
                    <p>{el}</p>
                    <span>{selectedMenu==el && <TiTick />}</span>
                  </div>
                ))
              }
            </div>
          )}
        </div>
      </div>  
    </div>
  )
}

export default AuthorTaps
