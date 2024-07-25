import { IMAGES } from "@/mock/images";
import { useTheme } from "@emotion/react";
import { Box, Stack } from "@mui/material";
export default function AboutMeRight() {
    const theme = useTheme();
    return (
        <Stack>
            <Box
                component="img"
                sx={{
                    maxWidth: theme.spacing(60),
                    borderRadius: 4,
                    // height: 233,
                    maxWidth: 350,
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                }}
                alt="About Img"
                src={IMAGES.about}
            />
        </Stack>
    );
}
