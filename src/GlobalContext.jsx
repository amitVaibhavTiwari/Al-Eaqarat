import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const globalContext = createContext();
const root = document.getElementById("root");
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => useContext(globalContext);

const GlobalContext = ({ children }) => {
  const defaultState = {
    userPreferredTheme: "default",
  };

  // reducers below
  const reducer = (state, action) => {
    if (action.type === "CHANGE_USER_THEME_PREFERENCE") {
      // removing previous theme preferred class from root
      root.className = "";
      // adding theme preferred class to root
      root.classList.add(`${action.payload.theme}-theme`);
      localStorage.setItem("THEME", action.payload.theme);
      return { ...state, userPreferredTheme: action.payload.theme };
    }

    if (action.type === "SET_USER_PREFERRED_THEME") {
      const userPreferredTheme = localStorage.getItem("THEME");
      if (userPreferredTheme) {
        // means user has a theme preference in local storage
        root.classList.add(`${userPreferredTheme}-theme`);
        return { ...state, userPreferredTheme: userPreferredTheme };
      } else {
        // user has no theme preference stored in local storage (This is first timee user is visiting our site)
        const prefersDarkMode = window.matchMedia(
          "(prefers-color-scheme:dark)"
        ).matches;
        if (prefersDarkMode === true) {
          // user likes dark mode by default
          root.classList.add(`dark-theme`);
          return { ...state, userPreferredTheme: "dark" };
        }
        if (prefersDarkMode === false) {
          // user likes light mode by default. (Our default theme is light :-))
          root.classList.add(`default-theme`);
          return { ...state, userPreferredTheme: "default" };
        }
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <globalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};

GlobalContext.propTypes = {
  children: PropTypes.object,
};

export default GlobalContext;
