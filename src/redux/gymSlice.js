import { createSlice } from "@reduxjs/toolkit";
import APIClient from "../apis/APIClient";

const initialState = {
  dashboard: [],
  transactions: [],
  trainers: [],
  users: [],
  classes: [],
  categories: [],
  edit: [],
  searchField: "",
};

// Actions
export const fetchDatas = ({ url, state }) => {
  return async (dispatch) => {
    try {
      const { data } = await APIClient.get(url);

      dispatch(getData({ ...data, state }));
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
    },

    // --- Edit --- //
    setEdit: (state, action) => {
      state.edit = action.payload;
    },

    deleteData: (state, action) => {
      if (action.payload.type === "many") {
        try {
          APIClient.delete(`${action.payload.url}`, {
            params: {
              ids: `${state.edit}`,
            },
          });
        } catch (error) {
          console.log(error);
          setEdit([]);
        }
      } else if (action.payload.type === "one") {
        try {
          APIClient.delete(`${action.payload.url}/${action.payload.id}`);
        } catch (error) {
          console.log(error);
          setEdit([]);
        }
      }
      setEdit([]);
    },

    // --- Search --- //
    setSearchField: (state, action) => {
      state.searchField = action.payload;
    },
  },
});

export const { getData, setSearchField, setEdit, deleteData } =
  gymSlice.actions;

export default gymSlice.reducer;
