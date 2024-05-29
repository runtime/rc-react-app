import { blue, green, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const RapidCleanTheme = createTheme({
    palette: {
        primary: {
            main: '#3366cc',  //2C82FF
        },
        secondary: {
            main: '#86b95a',
        } ,
    },
    typography: {
        cardTitle: {
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#0885f2',
        },
        // Disable h3 variant
        h3: undefined,
        components: {
            MuiTypography: {
                defaultProps: {
                    variantMapping: {
                        // Map the new variant to render a <h1> by default
                        poster: 'h1',
                    },
                },
            },
        },
    },
    button: {
        color: 'white',
    },
});

