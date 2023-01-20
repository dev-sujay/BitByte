import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'


const Blogs = () => {
  return (
    <Box className='blogs'>
      <Heading fontSize={[26, 28, 30, 34]} textAlign={"center"} width={"40%"} py={4} mb={[4,6,12]} borderBottom={"2px solid black"} mx={"auto"} >Blogs</Heading>
      <Box className='image-container'>
        <div className="column">
          <div className='img-1'>
            <img src='https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/crpto_scam.webp' alt="" />
          </div>
          <div className='img-2'>
            <img src='https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/proof_of_work.jpg' alt="" />

          </div>
          <div className='img-3'>
            <img src='https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/meta.webp' alt="" />
          </div>
        </div>
        <div className="column">
          <div className='img-4'>
            <img  src='https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/nft.png' alt="" />
          </div>
          <div className='img-5'>
            <img src='https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/what_is_blockchain.jpg' alt="" />
          </div>
          <div className='img-6'>
            <img src='https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/virtual_land.avif' alt="" />
          </div>
        </div>
        <div className="column">
          <div className='img-7'>
            <img src='https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/crypto_india.jpg' alt="" />
          </div>
          <div className='img-8'>
            <img src='https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/secure%20from%20scam.jpg' alt="" />
          </div>
          <div className='img-9'>
            <img src='https://raw.githubusercontent.com/dev-sujay/BitByte/master/src/assets/dao.jpg' alt="" />
          </div>
        </div>
      </Box>
    </Box>

  )
}

export default Blogs
