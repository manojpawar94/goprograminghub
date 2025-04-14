import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Create a custom Material UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1e3a8a", // Deep blue from the existing scrollbar color
      light: "#4f67b3",
      dark: "#0d2b6b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#6c757d", // Bootstrap secondary color
      light: "#9aa0a6",
      dark: "#495057",
      contrastText: "#fff",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#212529",
      secondary: "#6c757d",
    },
  },
  typography: {
    fontFamily: '"Outfit", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      marginBottom: "1rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.3,
      marginBottom: "0.75rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: 1.8,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
});

// Theme provider component
export default function ThemeProvider({ children }) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides consistent baseline styles */}
      {children}
    </MUIThemeProvider>
  );
}
