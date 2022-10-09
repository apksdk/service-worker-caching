import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "./AppRoutes";
import SiteLayout from "./components/SiteLayout/SiteLayout";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SiteLayout>
        <AppRoutes />
      </SiteLayout>
    </ThemeProvider>
  );
}

export default App;
