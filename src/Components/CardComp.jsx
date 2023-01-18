import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text, Image, Box, Icon, VStack } from '@chakra-ui/react'


const CardComp = ({ icon, heading, text }) => {
  return (
    <Card w='sm' h={"200px"}  boxShadow ="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
      <CardBody >
        <VStack>
          <Icon as={icon} boxSize={"40px"} m={2}/>
          <VStack mt='6' spacing='3'>
            <Heading size='md' fontWeight={"semibold"}>{heading}</Heading>
            <Text fontSize={"sm"} textAlign={"center"} >
              {text}
            </Text>
          </VStack>
        </VStack>
      </CardBody>
      {/* <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  )
}

export default CardComp
