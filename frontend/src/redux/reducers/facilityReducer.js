const initialState = {
    facilities: [],
    loading: false,
    error: null,
  };
  
  export const facilityReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_FACILITIES_REQUEST":
        return { ...state, loading: true };
      case "FETCH_FACILITIES_SUCCESS":
        return { ...state, loading: false, facilities: action.payload };
      case "FETCH_FACILITIES_FAILURE":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  