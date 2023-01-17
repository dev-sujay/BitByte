import React from 'react'
import { Heading, Hide, HStack, Text } from '@chakra-ui/react'

const CoinDetailsCustomBar = ({ heading, date, remark, currencySymbol, currency }) => {
  return (
    <HStack
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} justifyContent={"space-between"}
      borderRadius={"5px"}
      my={2}
      py={4}
      px={"4"}>
      <Heading fontSize={"md"}>{heading}</Heading>
      <Hide breakpoint='(max-width:410px)'>
        <Text fontSize={10} fontWeight={"semibold"}>{date}</Text>
      </Hide>
      <Text fontFamily={"sans-serif"}>{currencySymbol} {remark}</Text>
    </HStack>
  )
}

export default CoinDetailsCustomBar
