import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./style.css";
import { get100Coins } from '../../../functions/get100Coins';

function SelectCoins({crypto1, crypto2, handleCoinChange}) {
    
    const [allCoins, setAllCoins] = useState([]);

    const style = {
            height: "2.5rem",
            color: "var(--white)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--white)",
            },
            "& .MuiSvgIcon-root": {
              color: "var(--white)",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
    }
 

   useEffect(()=>{
    getData();
   },[]);

   async function getData() {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
   }
 
  return (
    <div className='coins-flex'>
      <p>Coin1</p>
      <Select
          value={crypto1}
          label="Crypto 1"
          onChange={(event)=>handleCoinChange(event, false)}
          sx={style}
          className="btn-select"
        >
            {allCoins.filter((item)=> item.id != crypto2).map((coin, i)=>

                <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            )}
          
      </Select>

      <p>Coin2</p>
      <Select
          value={crypto2}
          label="Crypto 2"
          onChange={(event)=>handleCoinChange(event, true)}
          sx={style}
          className="btn-select"
        >
            {allCoins.filter((item)=> item.id != crypto1).map((coin, i)=>

                <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            )}
          
      </Select>
    </div>
  )
}

export default SelectCoins
