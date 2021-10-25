import axios from 'axios';
export const AuthApiInstance = axios.create();

enum TokenKeys{
  REFRESH_TOKEN = 'REFRESH_TOKEN',
  TOKEN = "TOKEN"
}

//Append Access Token
AuthApiInstance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem(TokenKeys.TOKEN)
    config.headers = { 
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config;
  },
  error => {
    Promise.reject(error)
});

//Handler Refresh Token
AuthApiInstance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = localStorage.getItem(TokenKeys.REFRESH_TOKEN);            
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    return AuthApiInstance(originalRequest);
  }
  return Promise.reject(error);
});