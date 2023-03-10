import React from 'react'
import heroImg from "../assets/cryptolibrary-header-crypto.png"
import { BsCheckCircleFill } from "react-icons/bs"
import { Box, Container, Heading, HStack, Image, Stack, Text, VStack, Icon } from '@chakra-ui/react'

const HeroSection = () => {
  return (

    <Stack width={["90vw", "70vw"]} justifyContent={"center"} mx={"auto"} my={8} mb={16} gap={"3rem"} alignItems={"center"}>
      <VStack>
        <Image src={heroImg} w={["2xl", "xl"]} p={[4, 0]} />
      </VStack>

      <VStack p={[4, 0]}>
        <Heading fontSize={30} fontWeight={"semibold"} my={6} textAlign={"center"}>
          Start developing your cryptocurrency portfolio today
        </Heading>
        <Heading fontSize={24} fontWeight={"medium"} textAlign={"center"}>
          Here are a few advantages why you should go with BitByte.
        </Heading>

        <VStack alignItems={"flex-start"} >
          <Box mt={6} >
            <HStack >
              <Icon as={BsCheckCircleFill} color={"whatsapp.500"} mr={2} />
              <Heading fontSize={20} fontWeight={"medium"} >Quality crypto assets have been listed</Heading>
            </HStack>
            <Text fontSize={15} py={4} px={6} color={"blackAlpha.700"}>With investor protection always at the forefront, we use a 7m framework to select crypto tokens before listing them.</Text>
          </Box>

          <Box>
            <HStack >
              <Icon as={BsCheckCircleFill} color={"whatsapp.500"} mr={2} />
              <Heading fontSize={20} fontWeight={"medium"} >Array of investment products</Heading>
            </HStack>
            <Text fontSize={15} py={4} px={6} color={"blackAlpha.700"}>BitByte has products for every investor type - Explore products like Buy/Sell, Learn, CIP, Earn, Futures, Margin and more.</Text>
          </Box>

          <Box>
            <HStack >
              <Icon as={BsCheckCircleFill} color={"whatsapp.500"} mr={2} />
              <Heading fontSize={20} fontWeight={"medium"} >A Larger Vision</Heading>
            </HStack>
            <Text fontSize={15} py={4} px={6} color={"blackAlpha.700"}>As India's most valued crypto company, we are building the Indian Crypto Ecosystem with Ventures, Learn, etc.</Text>
          </Box>

        </VStack>
      </VStack>

    </Stack>

  )
}

export default HeroSection
