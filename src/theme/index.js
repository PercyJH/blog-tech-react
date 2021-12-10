import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    //colores fuentes y esas vainas que hacen de algo "un tema"
    palette: {
        primary: {
            light: "#F4A3FE",
            main: "#EA31FF",
            dark: "#621C6A",
        },
        secondary: {
            main: "#8300FF"
        }
    },
});

export default theme;