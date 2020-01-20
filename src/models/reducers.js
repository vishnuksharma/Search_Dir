const setSearchDirStore = (state, searchDirStore) => ({
  ...state,
  searchDirStore,
});

const setEmpDirStore = (state, empDirSearch) => ({
  ...state,
  empDirSearch,
});

const updateEmpSearchState = (state, empDirSearch) => ({
  ...state,
  empDirSearch,
});

export default {
  reducers: {
    setSearchDirStore,
    setEmpDirStore,
    updateEmpSearchState,
  },
};