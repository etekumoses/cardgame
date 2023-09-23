import axios from "../../api/Api";

const LOGIN_URL = "/yogera_image/login/";
const LOGOUT = '/yogera_image/logout/';

// Login user
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);
console.log(response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    axios.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;
  }
  return response.data;
};

// Logout user
const logout = async() => {
  const response = await axios.post(LOGOUT);
  console.log(response);
  if(response.data){
    localStorage.removeItem("user");
    localStorage.removeItem("selectedLanguage");
    delete axios.defaults.headers.common['Authorization'];
  }
  return response.data;
};

const authService = {
  logout,
  login,
};

export default authService;
