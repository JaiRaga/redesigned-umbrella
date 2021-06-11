import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  CLEAR_PROFILE,
  CLEAR_BLOGS,
  UPDATE_PROFILE,
  AUTH_ERROR,
  PROFILE_ERROR
} from "./types";
import setAuthToken from "../../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/user/me");

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const registerUser = ({ username, handle, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, handle, email, password });

  try {
    console.log(1)
    const res = await axios.post("/api/register", body, config);
    console.log(2, res);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    console.log(3)
    loadUser();
    console.log(4)
  } catch (err) {
    dispatch({ type: REGISTER_FAIL });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    console.log(1);
    const res = await axios.post("/api/login", body, config);
    console.log(2);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    console.log(3);
    dispatch(loadUser());
    console.log(4);
  } catch (err) {
    dispatch({ type: LOGIN_FAIL });
  }
};

// Logout user
export const logout = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: CLEAR_BLOGS });
  dispatch({ type: LOGOUT });
};

// Update User Profile
export const updateProfile = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ ...formData });
  try {
    const res = await axios.patch("/api/user", body, config);
    console.log(res.data);
    dispatch({ type: UPDATE_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({ type: PROFILE_ERROR });
  }
};
