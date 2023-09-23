import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const ReviewerLoginContext = createContext(INITIAL_STATE);

const ReviewerLoginReducer = (state, action) => {
  switch (action.type) {
    case "REVIEWER_LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "REVIEWER_LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "REVIEWER_LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "REVIEWER_LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const ReviewerLoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReviewerLoginReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <ReviewerLoginContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ReviewerLoginContext.Provider>
  );
};
