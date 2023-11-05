import { Advert } from "components/Advert/Advert";
import React from "react";
import { Ul } from "./AdvertList.styled";
//

export const AdvertList = ({ adverts, addFavorite,  advertFavorite,  setAdvertFavorite}) => {
  
 
  return (
    <Ul>
      {adverts.map((advert) => (
        <Advert advert={advert} key={advert.id} addFavorite={addFavorite}   advertFavorite = {advertFavorite}
        setAdvertFavorite={setAdvertFavorite}/>
      ))}
    </Ul>
  );
};
