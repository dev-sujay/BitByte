import { Box, Heading, Stack, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import PosibilityCardComp from './PosibilityCardComp'
import nftImg from "../assets/nft.png"
import bitPayImg from "../assets/blockchain-payment.png"
import earnCryptoImg from "../assets/earn-crypto.png"

const PossibilitiesSection = () => {
    return (
        <Box w={["95vw", "90vw"]} mx={"auto"} my={8} py={4}>
            <Heading my={[8, 12]} mx={[3, "auto"]} w={["90vw", "max-content"]} >Explore endless possibilities with BitByte</Heading>

            <Stack
                mx={"auto"}
                flexDir={"row"}
                flexWrap={"wrap"}
                gap={4}
                justifyContent={"center"}
                alignItems={"center"}
                px={8}
                
            >
                <PosibilityCardComp
                    img={nftImg}
                    heading={'Dive into the world of NFTs'}
                    text={"BitByte NFT is an exciting and innovative platform that gives people the chance to explore a world of possibilities with its Mystery Boxes, IGOs, Fan Tokens, and more. Whether you're looking to find rare items or just have fun trading digital assets, BitByte NFT has it all."}
                    flexdir={"column"}
                />
                <PosibilityCardComp
                    img={bitPayImg}
                    heading={'Grow your business with BitByte Pay'}
                    text={"The BitByte Pay is revolutionizing the way businesses reach customers, allowing them to pay and get paid in crypto without any border restrictions. This technology offers businesses 10 times more access to global customers than ever before, enabling them to grow their revenue customer base."}
                    flexdir={"column-reverse"}
                />
                <PosibilityCardComp
                    img={earnCryptoImg}
                    heading={'BitByte Earn'}
                    text={"BitByte offers a secure and convenient platform to store your crypto funds. With its advanced security features, your funds are safe from any potential threats. Moreover, you can start earning rewards from today. With BitByte, you can easily monitor your crypto funds and take advantage of all the latest market opportunities. So don't wait any longer, hold your crypto funds in BitByte and start earning from today!"}
                    flexdir={"column"}
                />
            </Stack>
        </Box>
    )
}

export default PossibilitiesSection
