import React from "react";
import { DetailsCard, Img, NameCard, Span } from "./AdvertDetails.styled";

const AdvertDetails = ({ advert }) => {
  console.log("advert: ", advert);
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = advert;
  const country = address.split(", ")[address.split(", ").length - 1];
  const accessory = accessories[accessories.length - 1];
  const city = address.split(", ")[address.split(", ").length - 2];
  return (
    <div>
      <NameCard>
        <Img src={img} alt={model} />
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
    </div>
  );
};

export default AdvertDetails;
