import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL, API_KEY } from "../shared/url";

export const fetchAllMovies = createAsyncThunk(
  "movies/fetchAllMovies",
  async (pageNum, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        `${baseURL}/popular?api_key=${API_KEY}&language=en-US&page=${pageNum}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSingleMovie = createAsyncThunk(
  "movies/fetchSingleMovie",
  async (movieId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        `${baseURL}/${movieId}?api_key=${API_KEY}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  allMovies: null,
  isLoading: false,
  succeed: false,
  error: null,
  singleMovie: null,
};

const allMoviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    // ALL MOVIES
    [fetchAllMovies.pending]: (state) => {
      state.allMovies = null;
      state.isLoading = true;
      state.succeed = false;
      state.error = null;
    },
    [fetchAllMovies.fulfilled]: (state, action) => {
      state.allMovies = action.payload;
      state.isLoading = false;
      state.succeed = true;
    },
    [fetchAllMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.succeed = false;
      state.error = action.payload;
    },

    // SINGLE MOVIE
    [fetchSingleMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleMovie.fulfilled]: (state, action) => {
      state.singleMovie = action.payload;
      state.isLoading = false;
      state.succeed = true;
    },
    [fetchSingleMovie.rejected]: (state, action) => {
      state.isLoading = false;
      state.succeed = false;
      state.error = action.payload;
    },
  },
});

export default allMoviesSlice.reducer;
