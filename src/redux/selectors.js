import { createSelector } from "@reduxjs/toolkit";

export const selectAdverts = (state) => state.adverts.items;

export const selectIsLoading = (state) => state.adverts.isLoading;

export const selectError = (state) => state.adverts.error;

export const selectCurrentPage = (state) => state.adverts.error;

export const selectFavorites = (state) => state.adverts.favorites;

// export const selectFavoriteAdverts = createSelector(
//   [selectAdverts, selectFavorites],
//   (adverts, value) => {
//     return adverts?.filter((advert) => {
//       return advert.make.toLowerCase().includes(value.toLowerCase()) ?? [];
//     });
//   }
// );

export const selectAdvertsFilter = state => state.filterContacts.value;

export const selectFilteredContacts = createSelector(
  [
    selectAdverts, 
    selectAdvertsFilter, 
  ],
  (items, value) => {
    return items?.filter(advert => {
      return advert.name.toLowerCase().includes(value.toLowerCase()) ?? [];
    });
  }
);
