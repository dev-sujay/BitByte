import { Box, Container, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import HeroSection from '../Components/HeroSection'
import FreeBitcoinComp from '../Components/FreeBitcoinComp'
import PossibilitiesSection from '../Components/PossibilitiesSection'
import FeaturesSection from '../Components/FeaturesSection'
import HelpSection from '../Components/HelpSection'


const Home = () => {
  return (
    <>
      <VStack w={["88vw", "70vw", "60vw"]} py={8} mx={"auto"} textAlign={"center"} >

        <Heading fontSize={[28, 30, 34]} fontWeight={"700"} my={4} letterSpacing={"wider"}>1 million+ Indians have chosen BitByte, India's most valuable Crypto Investment App</Heading>
        <Text w={"60%"} fontSize={13} >Invest in Bitcoin, Ethereum, and other 150+ crypto assets.
          Register and start with as little as ₹50.</Text>

      </VStack>

      <HeroSection />

      <FeaturesSection/>

      <FreeBitcoinComp/>

      <PossibilitiesSection/>

      <HelpSection/>

    </>
  )
}

export default Home
