import { createSlice } from "@reduxjs/toolkit";
import APIClient from "../apis/APIClient";

const initialState = {
  items: [],
  transactions: [],
  trainers: [],
  users: [],
  classes: [],
  searchField: "",
};

// Actions
export const fetchDatas = ({ url, state }) => {
  return async (dispatch) => {
    try {
      const { data } = await APIClient.get(url);

      dispatch(getData({ ...data, state }));
      //   console.log(data, state);
    } catch (error) {
      console.log(error);
    }
  };
};

// State: gym
export const gymSlice = createSlice({
  name: "gym",
  initialState,

  reducers: {
    // --- Data --- //
    getData: (state, action) => {
      state[action.payload.state] = action.payload.data;
      //   console.log("Payload", action.payload);
      //   console.log("State Transaction", state[action.payload.state]);
    },

    // --- Search --- //
    setSearchField: (state, action) => {
      state.searchField = action.payload;
    },
  },
});

export const { getData, setSearchField } = gymSlice.actions;

export default gymSlice.reducer;
