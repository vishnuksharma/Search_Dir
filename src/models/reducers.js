const INITIAL_STATE = {
  searchDirStore: {},
  empDirSearch: {},
}

const setSearchDefaultStore = (state, searchDirStore) => ({
  ...state,
  searchDirStore,
});

const setEmpDirSearchStore = (state, empDirSearch) => ({
  ...state,
  empDirSearch,
});

export default {
  initialState: INITIAL_STATE,
  reducers: {
    setSearchDefaultStore,
    setEmpDirSearchStore,
  },
};