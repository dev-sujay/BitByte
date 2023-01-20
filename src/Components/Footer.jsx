import { Divider, Heading, HStack, Link, Text, VStack, Icon, Box, InputGroup, InputLeftAddon, Input, InputRightAddon, Stack } from '@chakra-ui/react'
import React from 'react'
import { BsDiscord, BsFacebook, BsInstagram, BsTelegram, BsTwitter, BsYoutube } from 'react-icons/bs'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'



const Footer = () => {
  return (
    <footer>
      <Stack flexDir={"row"} flexWrap={"wrap"} gap={6} justifyContent={"space-evenly"} alignItems={"center"} backgroundColor={"blackAlpha.300"} px={4} py={8} mt={8}>
        <VStack w={"290px"}>
          <Heading mb={2} fontSize={22} >Adress</Heading>
          <Text textAlign={"center"}>
            156a, M G Road, Barabazar, Barabazar,
            Kolkata, West Bengal, 700007
          </Text>
        </VStack>
        <VStack w={"290px"}>
          <Heading mb={2} fontSize={22}>Reach Us</Heading>
          <Box overflow={"hidden"} borderRadius={"10px"}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3683.9701452813583!2d88.3532043!3d22.5802199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b0dfd8383b%3A0xfd4699f024b1332a!2s156%2FA%2C%20Mahatma%20Gandhi%20Rd%2C%20Central%20Avenue%2C%20Bortola%2C%20Barabazar%20Market%2C%20Kolkata%2C%20West%20Bengal%20700001!5e0!3m2!1sen!2sin!4v1674134205491!5m2!1sen!2sin"></iframe>
          </Box>
        </VStack>
        <VStack gap={2} w={"290px"}>
          <Heading mb={2} fontSize={22}>Social Links</Heading>
          <HStack gap={4}>
            <Link><Icon as={BsInstagram}  boxSize={"6"} /></Link>
            <Link><Icon as={BsYoutube}  boxSize={"6"} /></Link>
            <Link><Icon as={BsTelegram} boxSize={"6"}  /></Link>
          </HStack>
          <HStack gap={4}>
            <Link><Icon as={BsDiscord}  boxSize={"6"} /></Link>
            <Link><Icon as={BsFacebook} boxSize={"6"}  /></Link>
            <Link><Icon as={BsTwitter}  boxSize={"6"} /></Link>
          </HStack>
          <VStack>
          <Heading mb={2} fontSize={18}>Subscribe to our Newsletter</Heading>
            <HStack>
              <FormControl id="email">
                <InputGroup size='sm' borderRadius={"5px"} overflow={"hidden"}>
                  <Input placeholder='email@email.com' type={"email"} variant={"filled"} bgColor={"white"} focusBorderColor={"transparent"}/>
                  <InputRightAddon children='Subscribe' bgColor={"whatsapp.500"} cursor={"pointer"} borderRadius={"0 5px 5px 0"}/>
                </InputGroup>
              </FormControl>
            </HStack>
          </VStack>
        </VStack>
      </Stack>
    </footer>
  )
}

export default Footer
