import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  HStack,
  VStack,
  Text,

} from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { CgMenuLeft } from "react-icons/cg"
import { useState, useEffect } from 'react'

const DrawerComp = () => {
  const [windowWidth, setwindowWidth] = useState("100vw");

  useEffect(() => {
    setwindowWidth(window.innerWidth)
  }, [window.innerWidth]);

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button w={"50px"} variant={"ghost"} pos={"absolute"} top={2} left={-2} onClick={() => onOpen()}><CgMenuLeft /></Button>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={windowWidth > 600 ? "md" : "full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton pos={"absolute"} top={"5"} right={"4"} />
          <DrawerHeader color={"whatsapp.500"} fontSize={"3xl"} fontWeight={"bold"}
            fontFamily={"Poppins"}>
            <Link to={"/"} onClick={() => onClose()} >
              BitByte
            </Link>
          </DrawerHeader>
          <DrawerBody fontWeight={"bold"} fontSize={"xl"}>
            <VStack gap={4} height={"100%"} justifyContent={"center"} textColor={"blackAlpha.800"}>
            <Link to={"/"} onClick={() => onClose()}><Text fontWeight={"semibold"}>Home</Text></Link>
              <Link to={"/explore"} onClick={() => onClose()}> <Text fontWeight={"semibold"}>Explore</Text></Link>
              <Link to={"/learn"} onClick={() => onClose()}> <Text fontWeight={"semibold"}>Learn</Text></Link>
              <Link to={"/blogs"} onClick={() => onClose()}> <Text fontWeight={"semibold"}>Blogs</Text></Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <HStack w={"100%"} justifyContent={"center"} h={"150px"}>
              <Button variant={"outline"} colorScheme={"whatsapp"} size={"sm"} mr={6} >Sign In</Button>
              <Button variant={"solid"} colorScheme={"whatsapp"} size={"sm"}>Get Started</Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerComp
