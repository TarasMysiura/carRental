import React from "react";
import {
  Button,
  Card,
  DetailsCard,
  Img,
  Li,
  NameCard,
  NumberSpan,
  Span,
} from "./Advert.styled";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeContact } from "redux/advertsSlice";

export const Advert = ({
  id,
  img,
  alt,
  year,
  make,
  mileage,
  type,
  model,
  address,
  rentalPrice,
  rentalCompany,
  accessories,
}) => {
  const country = address.split(", ")[address.split(", ").length - 1];
  const accessory = accessories[accessories.length - 1];
  const city = address.split(", ")[address.split(", ").length - 2];

  // const dispatch = useDispatch();

  // const onRemoveAdvert = contactId => {
  //   dispatch(removeContact(contactId));
  // };

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
      <Button>Learn more</Button>
    </Card>
  );
};

Advert.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
