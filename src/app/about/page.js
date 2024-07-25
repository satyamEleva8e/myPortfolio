"use client";

import { AboutMe } from "@/components";
import AboutMeRight from "@/components/about/aboutMeRight/page";
import AboutStatus from "@/components/about/aboutStatus/page";
import { Container, Stack } from "@mui/material";

export default function Aboutpage() {
    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="center">
                <AboutMe />
                <AboutMeRight />
            </Stack>
            {/* <AboutStatus /> */}
        </Container>
    );
}
