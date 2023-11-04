import React from "react";
import {
  Accessory,
  AccessoryName,
  AccessorySpan,
  AdventTitle,
  AdventDescription,
  DetailsCard,
  Functionality,
  FunctionalityName,
  FunctionalitySpan,
  Img,
  NameCard,
  Span,
  Ul,
  Condition,
  ConditionText,
  UlConditions,
  ConditionSpan,
  Button,
  Card,
} from "./AdvertDetails.styled";
import { nanoid } from "nanoid";

const AdvertDetails = ({ advert }) => {
  console.log("advert: ", advert);
  const {
    id,
    year,
    make,
    model,
    type,
    imgDet,
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
  const city = address.split(", ")[address.split(", ").length - 2];
  const conditions = rentalConditions.split("\n");
  const conditionsFirst = conditions[0].split(": ");
  conditions.splice(0, 1);
  const mileageData = (mileage / 1000).toString().replace(".", ",");
  return (
    <Card>
      <div>
        <Img src={imgDet} alt={model} />
        <NameCard>
          <p>
            {make} <Span>{model}</Span>,&nbsp;
            {year}
          </p>
        </NameCard>
        <DetailsCard>
          <DetailsCard>
            <p>{city}&nbsp;|&nbsp;</p>
            <p>{country}&nbsp;|&nbsp;</p>
            <p>id: {id}&nbsp;|&nbsp;</p>
            <p>year: {year}&nbsp;|&nbsp;</p>
            <p>type: {type}&nbsp;</p>
          </DetailsCard>
          <DetailsCard>
            <p>fuelConsumption: {fuelConsumption}&nbsp;|&nbsp;</p>
            <p>engineSize: {engineSize}&nbsp;</p>
          </DetailsCard>
        </DetailsCard>
        <AdventDescription>{description}</AdventDescription>
      </div>
      <div>
        <AdventTitle>Accessories and functionalities:</AdventTitle>
        <Ul>
          {accessories.map((accessory) => (
            <Accessory key={nanoid(2)}>
              <AccessoryName>{accessory}</AccessoryName>
              {accessories.indexOf(accessory) < accessories.length - 1 && (
                <AccessorySpan>|</AccessorySpan>
              )}
            </Accessory>
          ))}
          {functionalities.map((functionality) => (
            <Functionality key={nanoid(2)}>
              <FunctionalityName>{functionality}</FunctionalityName>
              {functionalities.indexOf(functionality) <
                functionalities.length - 1 && (
                <FunctionalitySpan>|</FunctionalitySpan>
              )}
            </Functionality>
          ))}
        </Ul>
      </div>
      <div>
        <AdventTitle>Rental Conditions:</AdventTitle>
        <UlConditions>
          <Condition>
            <ConditionText>{conditionsFirst[0]}</ConditionText>
            <ConditionSpan>{conditionsFirst[1]}</ConditionSpan>
          </Condition>
          <Condition>
            <ConditionText>{conditions[0]}</ConditionText>
          </Condition>
  
          {conditions.splice(0, 1) && conditions.map((condition) => (
            <Condition key={nanoid(2)}>
              {conditions.indexOf(condition) < 3 && (
                <ConditionText>{condition}</ConditionText>
              )}
            </Condition>
          ))}
          <Condition>
            <ConditionText>Mileage:</ConditionText>
            <ConditionSpan>{mileageData}</ConditionSpan>
          </Condition>
          <Condition>
            <ConditionText>Price:</ConditionText>
            <ConditionSpan>{rentalPrice}</ConditionSpan>
          </Condition>
        </UlConditions>
      </div>

      <Button type="button"><a href="tel:+380730000000">Rental car</a></Button>
    </Card>
  );
};

export default AdvertDetails;
