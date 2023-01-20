import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import nftImg from 'https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/nft.png'
import cryptoScam from 'https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/crpto_scam.webp'
import blockchainImg from 'https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/what_is_blockchain.jpg'
import cryptoIndiaImg from 'https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/crypto_india.jpg'
import proofOfWorkImg from 'https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/proof_of_work.jpg'
import virtualLandImg from 'https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/virtual_land.avif'
import daoImg from 'https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/dao.jpg'
import metaimg from 'https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/meta.webp'
import secureFromScam from 'https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/secure%20from%20scam.jpg'

const Blogs = () => {
  return (
    <Box className='blogs'>
      <Heading fontSize={[26, 28, 30, 34]} textAlign={"center"} width={"40%"} py={4} mb={[4,6,12]} borderBottom={"2px solid black"} mx={"auto"} >Blogs</Heading>
      <Box className='image-container'>
        <div className="column">
          <div className='img-1'>
            <img src={cryptoScam} alt="" />
          </div>
          <div className='img-2'>
            <img src={proofOfWorkImg} alt="" />

          </div>
          <div className='img-3'>
            <img src={metaimg} alt="" />
          </div>
        </div>
        <div className="column">
          <div className='img-4'>
            <img  src={nftImg} alt="" />
          </div>
          <div className='img-5'>
            <img src={blockchainImg} alt="" />
          </div>
          <div className='img-6'>
            <img src={virtualLandImg} alt="" />
          </div>
        </div>
        <div className="column">
          <div className='img-7'>
            <img src={cryptoIndiaImg} alt="" />
          </div>
          <div className='img-8'>
            <img src={secureFromScam} alt="" />
          </div>
          <div className='img-9'>
            <img src={daoImg} alt="" />
          </div>
        </div>
      </Box>
    </Box>

  )
}

export default Blogs
