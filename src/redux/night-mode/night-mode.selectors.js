import { createSelector } from 'reselect';

const selectNightMode = state => state.nightMode;

export const selectIsNightMode = createSelector(
  [selectNightMode],
  nightMode => nightMode.isNightMode
);
