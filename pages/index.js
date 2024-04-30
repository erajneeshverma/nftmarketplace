import React from 'react'

//internal import
import Style from '../styles/index.module.css';
import { AudioLive, BigNFTSlider, Category, Collection, Filter, FollowerTab, HeroSection, NFTCard, Service, Slider, Subscribe, Title, Brand, Video } from '../components/componentindex.js';

const Home = () => {
  return (
    <div className={Style.heroPage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider />
      <Title heading="Audio Collection" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <AudioLive />
      <Title heading="Filter By Collection" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <FollowerTab />
      <Slider />
      <Collection />
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <Filter />
      <NFTCard />
      <Title heading="Browse by category" paragraph="Explore the NFT in the most feature categories."/>
      <Category />
      <Subscribe/>
      <Brand />
      <Video />
    </div>
  )
}

export default Home;