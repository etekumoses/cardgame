import API from "../../api/Api";

const GET_PROFILE_URL = "/apis/getProfile";

// get profile
const fetchprofile = async () => {
  const response = await API.get(GET_PROFILE_URL);
  return response.data;
};
const profileService = {
  fetchprofile
};

export default profileService;
