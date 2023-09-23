import { colors } from "@mui/material";
import { createTheme, lighten } from "@mui/material/styles";

export const Colors = {
  primary: "#c42a29",
  secondary: "#f2da99",
  backdrop: "#f7f7f7",
  tertiary: "#d3e0e0",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
});

export default theme;
