import React from 'react'
import SmallCardComp from './SmallCardComp'
import { Box, Stack } from '@chakra-ui/react'
import { FcBarChart, FcClock, FcSafe } from 'react-icons/fc'


const FeaturesSection = () => {
    return (
        <Stack w={["95vw", "80vw"]} mx={"auto"} flexDir={"row"} flexWrap={"wrap"} gap={4} justifyContent={"center"} alignItems={"center"} my={8} py={4} >

            <SmallCardComp
                icon={FcClock}
                heading={"Simple & Quick"}
                text={"Download the BitByte app, complete KYC and deposit INR to start investing"}
                height={"210px"}
            />

            <SmallCardComp
                icon={FcBarChart}
                heading={"Valuing Risk Appetite"}
                text={"We value your risk appetite and enable you to invest with amount as low as Rs. 50"}
                height={"210px"}
            />

            <SmallCardComp
                icon={FcSafe}
                heading={"Safe & secure"}
                text={"Covered by leading risk monitoring & asset insurance providers"}
                height={"210px"}
            />


        </Stack>
    )
}

export default FeaturesSection
