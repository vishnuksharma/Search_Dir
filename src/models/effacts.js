import { getEmployee } from '../api/searchEmployeeApi';

const delay = (time)=> new Promise(resolve =>setTimeout(()=>resolve(), time))

export async function getSearchDir(payload) {
    try {
      const res = await getEmployee(payload);
      if (payload) {
        this.setEmpDirStore(res)
      } else {
          this.setSearchDirStore(res);
      }
    } catch (error) {
      console.log(error)
    } finally {
      // ToDO: Finally
    }
  }

  export function updateEmpSearchState(status) {
    this.updateEmpSearchState(status);
  }