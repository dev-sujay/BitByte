import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text, Image, Box, Icon, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const SmallCardComp = ({ icon, heading, text, learnmorePageLink, linktext, linktextIcon}) => {
  return (
    <Box w='xs'  boxShadow={"xl"} alignSelf={"stretch"} p={4} borderRadius={6}>
      <VStack justifyContent={"space-evenly"} >
        <Icon as={icon} boxSize={"40px"} m={2} color={"whatsapp.400"} />
        <VStack mt='6' spacing='3'>
          <Heading size='md' fontWeight={"semibold"}>{heading}</Heading>
          <Text fontSize={"sm"} textAlign={"center"} >
            {text}
          </Text>
        </VStack>
          <HStack cursor={"pointer"} >
            <Text>
              {linktext}
            </Text>
            {linktextIcon}
          </HStack>
      </VStack>
    </Box>
  )
}

export default SmallCardComp
