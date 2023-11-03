import { Advert } from 'components/Advert/Advert';
import React from 'react';
import { Ul } from './AdvertList.styled';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSlice';
// import { getAdverds } from 'redux/adverdsSlice';



export const AdvertList = ({adverts}) => {
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
    {adverts.map(({ id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }) => (
      <Advert
        key={id}
        img={img}
        alt={model}
        year={year}
        make={make}
        mileage={mileage}
        type={type}
        model={model}
        rentalPrice={rentalPrice}
        rentalCompany={rentalCompany}
        address={address}
        accessories={accessories}

      />
    ))}

    </Ul>
  );
};





