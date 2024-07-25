import { IMAGES } from "@/mock/images";
import { useTheme } from "@emotion/react";
import { Box, Stack } from "@mui/material";

export default function LeftHomePage() {
    const theme = useTheme();

    return (
        <Stack width={1} alignItems="flex-end">
            <Box
                component="img"
                sx={{
                    maxWidth: theme.spacing(60),
                    borderRadius: 4,
                    // height: 233,
                    // width: 350,
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                }}
                alt="Satyam Kumar Image"
                src={IMAGES.profile}
            />
        </Stack>
    );
}
