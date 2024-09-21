import axios from 'axios';

//const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1';
const urlBase = import.meta.env.VITE_API_URL

const useAuth = async (path, data) => {
  const url = `${urlBase}${path}`;
  try {
    const response = await axios.post(url, data);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data; // Devolver la respuesta para su uso en el componente
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred during login');
  }
};

export default useAuth;
