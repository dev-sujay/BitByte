import { Heading, Input, VStack, HStack, Box, InputGroup, InputLeftElement } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CurrencyBar from '../Components/CurrencyBar'
import { base_url } from '../utils/data';
import ErrorComponent from "../Components/ErrorComponent"
import Loader from "../Components/Loader"
import CurrencySelector from '../Components/CurrencySelector';
import { SearchIcon } from "@chakra-ui/icons"


const Explore = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [currencySymbol, setCurrencySymbol] = useState("₹");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data: coinsList } = await axios.get(`${base_url}/coins`)
        setCoins(coinsList)
        setLoading(false)
        console.log(coinsList);
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchCoins()
  }, [currency]);

  console.log(search);

  if (error) {
    return <ErrorComponent message={"There is a problem in fetching coins, please refresh the page or try after some time"} />
  }

  return (
    <>
      <VStack 
      p={[4, 8]} 
      h={["40vh", "45vh"]} 
      justifyContent={"center"} >

        <Heading 
        color={"whatsapp.500"} 
        mb={3} fontFamily={"Poppins"} 
        textAlign={"center"}>
        Explore all the coins
        </Heading>

        <InputGroup maxW={"280px"} mx={"auto"} >
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color={"blackAlpha.500"} />}
          />
          <Input
            placeholder='search coins...'
            variant='filled'
            border={"1px solid transparent"}
            focusBorderColor='transparent'
            _placeholder={{ opacity: 0.5, color: 'gray.400' }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
        <CurrencySelector setSelectedCurrency={setCurrency} setSelectedCurrencySymbol={setCurrencySymbol} />
      </VStack>

      <HStack justifyContent={"center"} alignItems={"flex-start"}>
        <Box>
          {loading ? (<Loader height={"50vh"} width={"50vw"} />) : (
            <>
              <VStack gap={"6"}>
                <div className="grid-parent-heading">
                  <Box className='coin-image-heading' >Coin</Box>
                  <Box>Price</Box>
                  <Box className='pricechange-heading'>Change</Box>
                  <Box>Trade</Box>
                </div>

                {coins.filter((item) => {
                  return search === "" ? item : item.name.toLowerCase().includes(search) || item.symbol.toLowerCase().includes(search)
                }).map((coin, index) => {
                  return (
                    <CurrencyBar
                      key={index}
                      image={coin.image.small}
                      price={coin.market_data.current_price[`${currency}`]}
                      priceChange={coin.market_data.price_change_24h}
                      priceChangePercent={coin.market_data.price_change_percentage_24h}
                      marcketCap={coin.market_cap}
                      name={coin.name}
                      symbol={coin.symbol}
                      currencySymbol={currencySymbol}
                      id={coin.id} />
                  )
                })}


              </VStack>

            </>
          )
          }
        </Box>

      </HStack>


    </>
  )
}

export default Explore
