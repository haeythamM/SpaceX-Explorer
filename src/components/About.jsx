import axios from "axios";

const API_URL = "https://api.spacexdata.com/v4";

export const fetchCompanyInfo = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/company`);
    return data;
  } catch (error) {
    console.error("Error fetching company info:", error);
    throw new Error("Failed to fetch company info. Please try again later.");
  }
};
