import React, { useState } from "react";
import { Card, DetailsCard, Heart, Img, NameCard, Span } from "./Advert.styled";
// import PropTypes from "prop-types";
import { SvgIconsSelector } from "components/Icon/SvgIconsSelect";
import BtnLearnMore from "components/BtnLearnMore/BtnLearnMore";

export const Advert = ({ advert, addFavorite }) => {
  const {id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = advert;
  const [isFavorite] = useState(false);
  const country = address.split(", ")[address.split(", ").length - 1];
  const accessory = accessories[accessories.length - 1];
  const city = address.split(", ")[address.split(", ").length - 2];

  
  return (
    <Card>
      <Img src={img} alt={model} />
      <NameCard>
        <p>
          {make} <Span>{model}</Span>,&nbsp;
          {year}
        </p>
        <p>{rentalPrice}</p>
      </NameCard>
      <DetailsCard>
        <DetailsCard>
          <p>{city}&nbsp;|&nbsp;</p>
          <p>{country}&nbsp;|&nbsp;</p>
          <p>{rentalCompany}</p>
        </DetailsCard>
        <DetailsCard>
          <p>{type}&nbsp;|&nbsp;</p>
          <p>{model}&nbsp;|&nbsp;</p>
          <p>{mileage}&nbsp;|&nbsp;</p>
          <p>{accessory}</p>
        </DetailsCard>
      </DetailsCard>
      <Heart type="button" onClick={() => addFavorite(id)}>
        {isFavorite ? (
          <SvgIconsSelector id="heart"  />
        ) : (
          <SvgIconsSelector id="heartSelected" />
        )}
      </Heart>
      <BtnLearnMore advert={advert} />
    </Card>
  );
};

// Advert.propTypes = {
//   filteredContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
