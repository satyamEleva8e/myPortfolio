import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";

export default function Footer() {
    const theme = useTheme();
    return (
        <Stack alignItems="center" justifyContent="center" paddingTop={4}>
            <Typography
                sx={{
                    color: theme.palette.grey[400],
                }}
            >
                © 2024 Your Name. All Rights Reserved
            </Typography>
        </Stack>
    );
}
