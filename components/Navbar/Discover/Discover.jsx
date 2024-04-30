import React from 'react'
import Link from 'next/link';

//internal Import
import Style from './Discover.module.css';


const Discover = () => {

  //Discover - Navigation menu
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "searchPage"
    },
    {
      name: "Author Profile",
      link: "author"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account"
    },
    {
      name: "Upload NFT",
      link: "upload-nft"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },{
      name: "Blog",
      link: "blog"
    }
  ];

  return (
    <div>
      {
        discover.map((el,i) => {
          return (
            <div key={i+1} className={Style.discover}>
              <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Discover;