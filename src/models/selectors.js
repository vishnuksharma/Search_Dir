import { createSelector } from 'reselect';

const getEmpDirSearch = state => state.searchDir.empDirSearch;
export const getEmpDirSearchState = createSelector(
  [getEmpDirSearch],
  empDirSearch => empDirSearch,
);