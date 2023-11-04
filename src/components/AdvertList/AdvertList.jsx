import { Advert } from "components/Advert/Advert";
import React from "react";
import { Ul } from "./AdvertList.styled";
import { useSelector } from "react-redux";
import { getFilterValue } from "redux/filterSlice";
// import { getAdverds } from 'redux/adverdsSlice';

export const AdvertList = ({ adverts }) => {
  // console.log('adverts: ', adverts);

  // const adverds = useSelector(getAdverds);
  // const filterAdverds = useSelector(getFilterValue);

  // const onFilteredContacts = () => {
  //   const normalFilter = filterContacts.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalFilter)
  //   );
  // };

  // const filteredContacts = onFilteredContacts();
  return (
    <Ul>
      {adverts.map((advert) => (
        <Advert
          advert={advert}
          key={advert.id}
         
        />
      ))}
    </Ul>
  );
};
