import { Button, Heading, HStack, Image, Text, VStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import freecoin from "../assets/free-bitcoin.png"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

const FreeBitcoinComp = () => {
    return (
        <Stack w={["90vw", "80vw", "70vw"]} flexDir={["column", "row"]} gap={"1rem"} justifyContent={"center"} alignItems={"center"} my={8} py={8} mx={"auto"} flexWrap={["wrap", "wrap", "nowrap"]}>
            <Image src={freecoin} w={"lg"} p={[4, 0]} />
            <VStack>
                <Heading my={2} textAlign={"center"}>Trade Bitcoin for Free</Heading>
                <Link to={`/explore/bitcoin`}>
                    <Text textAlign={"center"}>0 trading fee on selected Bitcoin (BTC) spot trading pairs now <span style={{color:"#22c35e"}} >&gt;</span> </Text>
                </Link>
                <Link to={"/explore"} >
                    <Text textAlign={"center"}>Lowest transactions fees &lt; 0.1 % <span style={{color:"#22c35e"}} >&gt;</span> </Text>
                </Link>
                <Link to={"/explore/bitcoin"} >
                    <Button variant={"solid"} colorScheme={"whatsapp"} my={2}>Buy BTC for 0 Fee</Button>
                </Link>
            </VStack>
        </Stack>
    )
}

export default FreeBitcoinComp
