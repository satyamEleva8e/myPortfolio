"use client";
export * from "@mui/material";
import {
    CssBaseline,
    ThemeProvider as MUIThemeProvider,
    createTheme,
} from "@mui/material";

export default function ThemeProvider({ children }) {
    const customTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <MUIThemeProvider theme={customTheme}>
            <CssBaseline enableColorScheme />
            {children}
        </MUIThemeProvider>
    );
}
