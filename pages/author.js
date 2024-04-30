import React, { useState } from 'react'


import Style from '../styles/author.module.css';
import { Brand, Title } from '@/components/componentindex';
import { Banner, NFTCardTwo } from '@/collectionPage/collectionindex';
import { AuthorProfileCard, AuthorTaps, AuthorNFTCardBox } from '@/authorPage/authorindex';
import FollowerTabCard from '@/components/FollowerTab/FollowerTabCard/FollowerTabCard';
import images from '../img';


const author = () => {
  const followerArray = [{
    background: images.creatorbackground1,
    user: images.user1    
},
{
    background: images.creatorbackground2,
    user: images.user2    
},
{
    background: images.creatorbackground3,
    user: images.user3    
},
{
    background: images.creatorbackground4,
    user: images.user4    
},
{
    background: images.creatorbackground5,
    user: images.user5    
},
{
    background: images.creatorbackground6,
    user: images.user6    
},
{
    background: images.creatorbackground7,
    user: images.user7    
},
{
    background: images.creatorbackground10,
    user: images.user10    
}];

  const [collectibles, setCollectibles] = useState(true);
  const [created, setCreated] = useState(false);
  const [like,setLike] = useState(false);
  const [follower,setFollwer] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={Style.banner}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTaps setCollectibles={setCollectibles} setCreated={setCreated} setLike={setLike} setFollwer={setFollwer} setFollowing={setFollowing} />
      <AuthorNFTCardBox collectibles={collectibles} created={created} like={like} follower={follower} following={following} />
      <Title heading="PopularCreators" paragraph="Click on music icon and enjoy NFT music or audio."/>  

      <div className={Style.author_box}>
        {followerArray.map((el,i) => (
          <FollowerTabCard el={el} i={i} />
        ))}
      </div>
      <Brand />
    </div>
  )
}

export default author;
