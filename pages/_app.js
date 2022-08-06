import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import "../styles/globals.css";
import { useEffect } from "react";

function GoProgrammingHubApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return <Component {...pageProps} />;
}

export default GoProgrammingHubApp;
