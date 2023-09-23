import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const AdminLoginContext = createContext(INITIAL_STATE);

const AdminLoginReducer = (state, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "ADMIN_LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "ADMIN_LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "ADMIN_LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AdminLoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminLoginReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AdminLoginContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AdminLoginContext.Provider>
  );
};
