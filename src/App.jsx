import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "./styled";
import { darkTheme } from "./styled";
import { TasksCard } from "./components";
import { Toaster } from "react-hot-toast";
import { TasksProvider } from "./contexts/tasksContext";
import { useState } from "react";

const toastOptions = {
  duration: 2000,
  style: {
    fontSize: '12px'
  }
};

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(JSON.parse(localStorage.getItem('isDarkTheme') || false));

  const setDarkTheme = () => {
    setIsDarkTheme(true);
    localStorage.setItem('isDarkTheme', JSON.stringify(true));
  };

  const setLightTheme = () => {
    setIsDarkTheme(false);
    localStorage.setItem('isDarkTheme', JSON.stringify(false));
  };
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <Toaster toastOptions={toastOptions}/>
      <TasksProvider>
        <TasksCard setLightTheme={setLightTheme} setDarkTheme={setDarkTheme} isDarkTheme={isDarkTheme}/>
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App;
