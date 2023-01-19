import { Heading, HStack, useDisclosure, Menu, MenuButton, MenuList, VStack, Text, Button, Show, Hide, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import DrawerComp from './DrawerComp'

const Navbar = () => {

  return (
    <header>
      <HStack h={"60px"} borderBottom={"1px solid rgba(0,0,0,0.1)"}>
          <DrawerComp />
          <Link to={"/"} >
          <Heading color={"whatsapp.500"} fontSize={"3xl"} ml={"4rem"} fontFamily={"Poppins"}>BitByte</Heading>
        </Link>
      </HStack>
    </header>
  )
}

export default Navbar
