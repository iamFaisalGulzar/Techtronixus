import "../styles/globals.css";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  return (
    // <React.StrictMode>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    // </React.StrictMode>

    
  );
}

export default MyApp;
