import { Box, Stack, Icon } from '@chakra-ui/react'
import React from 'react'
import SmallCardComp from './SmallCardComp'
import { FcCustomerSupport, FcFaq, FcNews } from 'react-icons/fc'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

const HelpSection = () => {
    return (
        <Stack  w={["95vw", "80vw"]} mx={"auto"} flexDir={"row"} flexWrap={"wrap"} gap={4} justifyContent={"center"} alignItems={"center"} my={8} py={4}>

            <SmallCardComp
                icon={FcCustomerSupport}
                heading={"24/7 Chat Support"}
                text={"Get 24/7 chat support with our friendly customer service agents at your service."}
                learnmorePageLink={"/help"}
                linktext={"Chat Now"}
                height={"235px"}
                linktextIcon={<Icon as={BsArrowUpRightCircleFill} boxSize={"16px"} color={"#22c35e"} />}
            />

            <SmallCardComp
                icon={FcFaq}
                heading={"FAQs"}
                text={"View FAQs for detailed instructions on specific features."}
                learnmorePageLink={"/faq"}
                linktext={"Check FAQs"}
                height={"235px"}
                linktextIcon={<Icon as={BsArrowUpRightCircleFill} boxSize={"16px"} color={"#22c35e"} />}
            />

            <SmallCardComp
                icon={FcNews}
                heading={"Blogs"}
                text={"Stay up to date with the latest stories and commentary."}
                learnmorePageLink={"/blogs"}
                linktext={"Blogs"}
                height={"235px"}
                linktextIcon={<Icon as={BsArrowUpRightCircleFill} boxSize={"16px"} color={"#22c35e"} />}
            />


        </Stack>
    )
}

export default HelpSection
