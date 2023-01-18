import { Box, Container, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import CardComp from '../Components/CardComp'
import HeroSection from '../Components/HeroSection'
import { BsFillClockFill } from "react-icons/bs"
import { BsFillCreditCard2FrontFill } from "react-icons/bs"
import { MdOutlineSecurity } from "react-icons/md"


const Home = () => {
  return (
    <>
      <VStack w={["88vw", "70vw", "60vw"]} py={8} mx={"auto"} textAlign={"center"} >

        <Heading fontSize={28} fontWeight={"semibold"} my={4} color={"whatsapp.500"} letterSpacing={"wider"}>1 million+ Indians have chosen BitByte, India's most valuable Crypto Investment App</Heading>
        <Text w={"60%"} fontSize={13} >Invest in Bitcoin, Ethereum, and other 150+ crypto assets.
          Register and start with as little as ₹50.</Text>

      </VStack>

      <HeroSection />

      <Stack flexDir={["column", "row"]} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"} gap={"1rem"}  mx={"auto"}>

        <CardComp
          icon={BsFillClockFill}
          heading={"Simple & Quick"}
          text={"Download the BitByte app, complete KYC and deposit INR to start investing"}
        />

        <CardComp
          icon={BsFillCreditCard2FrontFill}
          heading={"Valuing Risk Appetite"}
          text={"We value your risk appetite and enable you to invest with amount as low as Rs. 50"}
        />

        <CardComp
          icon={MdOutlineSecurity}
          heading={"Safe & secure"}
          text={"Covered by leading risk monitoring & asset insurance providers"}
        />


      </Stack>

    </>
  )
}

export default Home
