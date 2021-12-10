import Router from "./router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Home /> */}
        {/* <Contact /> */}
        {/* <Login /> */}
        {/* <LoginView /> */}
        <Router />
      </div>
    </ThemeProvider>
  );
};

export default App;