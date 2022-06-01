import { configureStore } from "@reduxjs/toolkit";
import allMoviesReducer from "./moviesSlice";

const store = configureStore({ reducer: { movies: allMoviesReducer } });

export default store;
