import React from 'react'
import Select from "react-select";
import { currencyArr } from '../utils/data';
import { Box, HStack} from '@chakra-ui/react';

const CurrencySelector = ({setSelectedCurrency, setSelectedCurrencySymbol}) => {


    function handleSelect(data) {
        setSelectedCurrency(data.label)
        setSelectedCurrencySymbol(data.value)
    }
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          border:"none",
          color: state.isSelected ? '#22c35e' : 'black',
          cursor:"pointer",
          backgroundColor:"#f1f1f1",
        }),
        control: () => ({
          width: "128px",
          cursor:"pointer",
          backgroundColor:"#f1f1f1",
          borderRadius:"10px"
        }),
        
      }

    return (
        <>
            <Box mr={4}>
                <HStack className="dropdown-container" w={28} fontSize={"sm"} >
                    <Select
                        options={currencyArr}
                        onChange={handleSelect}
                        isSearchable={true}
                        styles={customStyles}
                        placeholder={"currency"}
                        isMulti={false}
                    />
                </HStack>
            </Box>
        </>
    )
}

export default CurrencySelector
