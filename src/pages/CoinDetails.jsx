import { Badge, Box, Heading, HStack, Image, Text, VStack, Stat, StatArrow, Stack, Hide } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from "../utils/data"
import ErrorComponent from "../Components/ErrorComponent"
import Loader from "../Components/Loader"
import CurrencySelector from '../Components/CurrencySelector';
import CoinDetailsCustomBar from '../Components/CoinDetailsCustomBar';
import CoinDetailChangesBar from '../Components/CoinDetailChangesBar';

const CoinDetails = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState("bitcoin");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [currencySymbol, setCurrencySymbol] = useState("₹");

  useEffect(() => {

    const fetchCoinDetails = async () => {
      try {
        const { data: coinDetails } = await axios.get(`${base_url}/coins/${id}`)
        setCoin(coinDetails)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchCoinDetails()
  }, []);

  if(error) {
    return <ErrorComponent message={`There is a problem in fetching ${id} details, please refresh the page or try after some time`} />
  } 

  return (
    <Box
      minH={"90vh"}
      width={["90vw", "85vw", "80vw", "70vw"]}
      mx={"auto"}
      my={"1rem"}>

      {loading ? (<Loader height={"100vh"} width={"90vw"} />) : (
        <>
          <Stack
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} py={3}
            px={8}
            borderRadius={"5px"}
            flexDir={["column-reverse", "row"]}
            justifyContent={"space-between"}
            my={2}
            flexWrap={"wrap-reverse"}
            alignItems={"center"}>

            <VStack>

              <HStack>
                <Heading fontSize={40}>{coin.name}</Heading>
                <Badge colorScheme={"facebook"} variant={"subtle"} >{coin.symbol}</Badge>
              </HStack>

              <CurrencySelector
                setSelectedCurrency={setCurrency} setSelectedCurrencySymbol={setCurrencySymbol} />

            </VStack>

            <Stack
              alignItems={"center"}
              flexDir={["row-reverse", "column"]} >
              <Image src={coin.image.large} w={"20"} m={"10px"} />
              <Badge
                variant={"subtle"}
                colorScheme={"telegram"}
                padding={2}>
                # {coin.market_cap_rank}
              </Badge>
            </Stack>

          </Stack>

          <Box
            my={2}
            className="coindetails-second-bar" >

            <HStack
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} h={"100px"}
              px={4}
              py={4}
              pr={["8", "4"]}
              borderRadius={"5px"}
              justifyContent={"space-between"} >
              <Heading fontSize={25}>{`${currencySymbol}`} {coin.market_data.current_price[`${currency}`]}</Heading>
              <Stat>
                <VStack alignItems={"flex-end"}  >
                  <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"} />
                  <Text fontSize={12}>{coin.market_data.price_change_percentage_24h} %</Text>
                </VStack>
              </Stat>
            </HStack>


            <VStack
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} h={"110px"}
              justifyContent={"center"}
              p={4}
              borderRadius={"5px"}>

              <CoinDetailChangesBar
                label={"24H Change"}
                currencySymbol={currencySymbol}
                currency={currency}
                remark={coin.market_data.price_change_24h_in_currency}
              />

              <CoinDetailChangesBar
                label={"24H High"}
                currencySymbol={currencySymbol}
                currency={currency}
                remark={coin.market_data.high_24h}
              />

              <CoinDetailChangesBar
                label={"24H Low"}
                currencySymbol={currencySymbol}
                currency={currency}
                remark={coin.market_data.low_24h}
              />

            </VStack>
          </Box>

          <Box>

            <CoinDetailsCustomBar
              heading={"All Time High"}
              date={new Date(coin.market_data.ath_date[`${currency}`]).toLocaleString()}
              currencySymbol={currencySymbol}
              remark={coin.market_data.ath[`${currency}`]}
            />

            <CoinDetailsCustomBar
              heading={"All Time Low"}
              date={new Date(coin.market_data.atl_date[`${currency}`]).toLocaleString()}
              currencySymbol={currencySymbol}
              remark={coin.market_data.atl[`${currency}`]}
            />

            <CoinDetailsCustomBar
              heading={"Market Cap"}
              remark={coin.market_data.market_cap[`${currency}`]}
            />

            <CoinDetailsCustomBar
              heading={"Total Supply"}
              remark={coin.market_data.total_supply}
            />

          </Box>
        </>
      )}
    </Box>
  )
}

export default CoinDetails
