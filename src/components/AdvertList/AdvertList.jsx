import { Advert } from "components/Advert/Advert";
import React from "react";
import { Ul } from "./AdvertList.styled";
// import { selectFavorites } from "redux/selectors";
// import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import { getFilterValue } from "redux/filterSlice";
// import { getAdverds } from 'redux/adverdsSlice';

export const AdvertList = ({ adverts }) => {
//   const favorites = useSelector(selectFavorites);
// const dispatch = useDispatch();

  
const addFavorite = (id) => {
// console.log('addFavorite: ', id);
    // if (!favorites.some(alreadyFavorite => alreadyFavorite.id == id)) {

      // dispatch({
      //   favorites: [...favorites, id]
      // });
    // }
  };
  // console.log('favorites: ', favorites);



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
          addFavorite={addFavorite}
         
        />
      ))}
    </Ul>
  );
};
