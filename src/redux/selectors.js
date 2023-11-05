// import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = (state) => state.adverts.items;

export const selectIsLoading = (state) => state.adverts.isLoading;

export const selectError = (state) => state.adverts.error;

export const selectCurrentPage = (state) => state.adverts.error;
export const selectFavorites = (state) => state.adverts.favorites;

// export const selectDateCalendar = (state) => state.dateCalendar.dateCalendar;

// export const selectVisibleTasks = createSelector(
//   [selectTasks, selectDateCalendar],
//   (tasks, date) => {
//     return tasks?.filter(
//       (task) => task.date === date.toISOString().slice(0, 10),
//     );
//   },
// );


export const selectAdvert = (state) => state.advert.items;