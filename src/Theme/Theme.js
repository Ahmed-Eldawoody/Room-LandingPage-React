import { createMuiTheme } from "@material-ui/core/styles";
//
//
// Colors
const Black = "hsl(0, 0%, 0%)";
const DarkGray = "hsl(0, 0%, 63%)";
const White = "hsl(0, 0%, 100%)";
const VeryDarkGray = "hsl(0, 0%, 27%)";
//
//
//
export const theme = createMuiTheme({
  typography: {
    fontFamily: "Spartan",
    h4: {
      fontFamily: "Spartan",
      color: Black,
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Spartan",
      color: Black,
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: "Spartan",
      color: DarkGray,
      fontWeight: 300,
    },
    body2: {
      fontFamily: "Spartan",
      color: DarkGray,
      fontWeight: 300,
    },
  },
});
