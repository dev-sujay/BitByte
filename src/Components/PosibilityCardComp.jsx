import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text, Image, Box, Icon, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const PosibilityCardComp = ({ img, heading, text, learnmorePageLink, flexdir }) => {
  return (
    <Card w={"350px"} 
      alignSelf={"stretch"} boxShadow={"2xl"} px={4} py={2} borderRadius={"10px"} transition={"all 0.3s"} _hover={{
      transform: "scale(1.02)",
    }}>
      <CardBody >
        <VStack flexDir={flexdir} >
          <Image src={img} borderRadius={"10px"} my={2} />
          <VStack mt='6' alignItems={"flex-start"}>
            <Heading size='lg' fontWeight={"semibold"}>{heading}</Heading>
            <Text fontSize={"sm"} p={3}  color={"blackAlpha.700"} >
              {text}
            </Text>
          </VStack>
        </VStack>
        <Link to={learnmorePageLink}>
          <Text my={4}>
            Learn More <span style={{ color: "var(--primary-color)" }}>&gt;</span>
          </Text>
        </Link>
      </CardBody>
    </Card>
  )
}

export default PosibilityCardComp
