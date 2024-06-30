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
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#0885f2',
        },
        // Disable h3 variant

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
        h1: {
            fontSize: '2.5rem',
            fontFamily: "Helvetica",
            fontWeight: 600,

        },
        h2: {
            fontSize: '2rem',
            fontFamily: "Helvetica",
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.25rem',
            fontFamily: "Helvetica",
            fontWeight: 600,
            color: '#3366cc',
            marginBottom: '1rem'
        },
        h4: {
            fontSize: '1rem',
            fontFamily: "Helvetica",
            fontWeight: 600,
            color: '#86b95a',
            marginBottom: '.5rem'

        },
        h5: {
            fontSize: '.65rem',
            fontFamily: "Helvetica",
            fontWeight: 600,
            color: '#999999',
        },
        h6: {
            fontSize: '.5rem',
            fontFamily: "Helvetica",
            fontWeight: 600,

        }

    },
    button: {
        color: 'white',
    },
});

