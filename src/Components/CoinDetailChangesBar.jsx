import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const CoinDetailChangesBar = ({label, remark, currencySymbol, currency}) => {
    return (
        <HStack w={"100%"} justifyContent={"space-between"} fontSize={13} >
            <Text fontWeight={"semibold"}>{label}</Text>
            <Text fontFamily={"sans-serif"}>{currencySymbol}{remark[`${currency}`]}</Text>
        </HStack>
    )
}

export default CoinDetailChangesBar
