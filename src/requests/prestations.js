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

export async function requestPrestationsModify(id, img, title, description, prix, position) {
  try {
    const response = await apiAxios.patch(
      `/prestations/${id}`,
      {
        id,
        img,
        title,
        description,
        prix,
        position,
      },
    );
    return response;
  }
  catch (err) {
    return err.response;
  }
}

export async function requestPrestationsCreate(id, img, title, description, prix, position) {
  try {
    const response = await apiAxios.post(
      `/prestations/${id}`,
      {
        id,
        img,
        title,
        description,
        prix,
        position,
      },
    );
    return response;
  }
  catch (err) {
    return err.response;
  }
}
