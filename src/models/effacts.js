import { getEmployee } from '../api/searchEmployeeApi';

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
      // throw new Error({apiError: true});
      console.log(error)
    } finally {
      // ToDO: Finally
    }
  }

  export function updateEmpSearchState(empDirSearch) {
    this.setEmpDirSearchStore(empDirSearch);
  }