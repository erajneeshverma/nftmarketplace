import React from 'react'


//internal import
import { Button, Category, Brand } from '@/components/componentindex';
import { NFTDetailsPage } from '@/nftDetailsPage/nftdetailspageindex';

const NFTDetails = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  )
}

export default NFTDetails;
