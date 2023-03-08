import './App.css';
import ApisInfoGroup from './components/ApisInfoGroup/ApisInfoGroup';
import React from 'react';
import Login from './components/Login/Login';
export const LongTextLazy = React.lazy(() => import('./components/LongText/LongText'));


// Contextos
export const ThemeContext = React.createContext();
export const LoginContext = React.createContext();

const themes = {
  light: {
    name: "Light",
    background: "#FFF",
    fontColor: "#000",
  },
  dark: {
    name: "Dark",
    background: "#000",
    fontColor: "#FFF",
  }
}

function App() {


  const [themeState, setThemeState] = React.useState(themes.dark)
  const [userState, setUserState] = React.useState();


  const updateUserInfo = (username) => {
    setUserState(username);
  }
  const loginProviderValue = {
    currentUsername: userState,
    updateUserInfo: updateUserInfo,
  }


  return (
    <LoginContext.Provider value={loginProviderValue}>
      <div>
      <ThemeContext.Provider value={themeState}>
        <h2>Login:</h2>

        <Login></Login>

        <h2>Temas (contextos)</h2>
        <p>Tema actual: {themeState.name}</p>
        <button onClick={() => setThemeState(themeState === themes.light ? themes.dark : themes.light)}>Cambiar tema</button>
        
          <ApisInfoGroup></ApisInfoGroup>
        </ThemeContext.Provider>

      </div>
    </LoginContext.Provider>
  );
}

export default App;
