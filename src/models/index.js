import omit from 'lodash/omit';
import * as effects from './effacts';
import searchDirReducer from './reducers';
import * as selectors from './selectors';


const initialState = {

};

export default {
  name: 'searchDir',
  state: initialState,
  effects: () => effects,
  reducers: searchDirReducer.reducers,
  selectors: omit(selectors, Object.keys(selectors).filter(k => selectors[k].omitToRematch)),
};
