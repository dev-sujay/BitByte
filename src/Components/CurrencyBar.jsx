import React from 'react'
import {
    Image,
    Box,
    Text,
    Button,
    StatArrow,
    Stat,
    Icon
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiFillRightCircle } from "react-icons/ai"

const CurrencyBar = ({ image, price, priceChange, name, symbol, currencySymbol, priceChangePercent, id }) => {
    return (
        <div className="grid-parent">

            <Image src={image} w={"12"} />

            <Box textAlign={"center"} mx={8} fontFamily={"Poppins"}>
                <Text fontWeight={"semibold"} >{name}</Text>
                <Text fontSize={"xs"} >{symbol}</Text>
            </Box>

            <Box textAlign={"center"} fontFamily={"sans-serif"}>{currencySymbol} {price}
            </Box>
            <Stat className='add-dots pricechange'>
                <StatArrow type={priceChange > 0 ? "increase" : "decrease"} />
                {priceChangePercent} %
            </Stat>
            <Box>
                <Link to={`/explore/${id}`}>
                    <Icon as={AiFillRightCircle} boxSize={7} color={"blackAlpha.400"} _hover={{ color: "#22c35e" }} />
                </Link>
            </Box>
        </div>
    )
}

export default CurrencyBar
