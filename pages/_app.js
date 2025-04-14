import "../styles/globals.css";
import ThemeProvider from "../components/ThemeProvider";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { CssBaseline } from "@mui/material";

// Create a client-side emotion cache
const clientSideEmotionCache = createCache({ key: "css" });

function GoProgrammingHubApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default GoProgrammingHubApp;
