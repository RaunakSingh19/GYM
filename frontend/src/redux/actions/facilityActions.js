import axios from "axios";

export const fetchFacilities = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/facilities/");
    dispatch({ type: "FETCH_FACILITIES", payload: response.data });
  } catch (error) {
    console.error("Error fetching facilities", error);
  }
};

export const addFacility = (facility) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/facilities/add", facility);
    dispatch({ type: "ADD_FACILITY", payload: response.data });
  } catch (error) {
    console.error("Error adding facility", error);
  }
};
