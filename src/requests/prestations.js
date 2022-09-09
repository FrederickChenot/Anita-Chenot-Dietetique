import apiAxios from './index';

// eslint-disable-next-line import/prefer-default-export
export async function requestPrestations() {
  try {
    const response = await apiAxios.get('/prestations');
    return response;
  }
  catch (err) {
    return err.response;
  }
}

export async function requestPrestationsDelete(id) {
  try {
    const response = await apiAxios.delete(`/prestations/${id}`);
    return response;
  }
  catch (err) {
    return err.response;
  }
}
