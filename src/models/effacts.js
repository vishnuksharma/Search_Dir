import { getEmployee } from '../api/searchEmployeeApi';
import { dispatch } from '../store';

const delay = (time)=> new Promise(resolve =>setTimeout(()=>resolve(), time))

export async function getSearchDir(payload) {
    try {
      const res = await getEmployee(payload);
      if (payload) {
        this.setEmpDirSearchStore(res)
      } else {
          this.setSearchDefaultStore(res);
      }
    } catch (error) {
      // dispatch()
      this.setEmpDirSearchStore({error:true});
      console.log(error)
    } finally {
      // ToDO: Finally
    }
  }

  export function updateEmpSearchState(empDirSearch) {
    this.setEmpDirSearchStore(empDirSearch);
  }