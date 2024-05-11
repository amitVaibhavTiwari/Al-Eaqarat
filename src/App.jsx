import { useEffect, useState } from "react";
import { useGlobalContext } from "./GlobalContext";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  const { dispatch } = useGlobalContext();
  const [settingTheme, setSettingTheme] = useState(true);

  useEffect(() => {
    dispatch({
      type: "SET_USER_PREFERRED_THEME",
    });
    setSettingTheme(false);
  }, []);

  // This below if condition and the state value is not useless. Don't remove this otherwise you'll get a small bug (Similar to aceterinity website).

  if (settingTheme) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
