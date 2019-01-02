import * as types from "./types";
import user from "../../data/user.json";

const setLoggedInState = loggedInState => ({
  type: types.SET_LOGGED_IN_STATE,
  loggedInState
});

const logIn = (email, password) => {
  const action = dispatch => {
    if (
      email.toLowerCase() === user.email.toLowerCase() &&
      password === user.password
    ) {
      dispatch(setLoggedInState(true));
      return true;
    }
    dispatch(setLoggedInState(false));
    return false;
  };
  return action;
};

const logOut = () => {
  const action = dispatch => {
    dispatch(setLoggedInState(false));
    return true;
  };
  return action;
};

export { logIn, setLoggedInState, logOut };
