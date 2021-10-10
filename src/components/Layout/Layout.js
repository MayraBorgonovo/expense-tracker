import useDarkMode from "../../styles/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "../../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import "./Layout.css";

const Layout = (props) => {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>{props.children}</main>
    </ThemeProvider>
  );
};

export default Layout;
