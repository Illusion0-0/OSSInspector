import { authReducer } from "../reducers/authReducer";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import { auth } from "../firebase/config";


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });
  // console.log(state);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;