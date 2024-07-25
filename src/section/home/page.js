"use client";
import { LeftHomePage, RightHomePage } from "@/components";
import { Container, Stack } from "@mui/material";

export default function HomePage() {
    return (
        <Container maxWidth="xl">
            <Stack
                direction="row"
                spacing={4}
                pt={4}
                alignItems="center"
                justifyContent="center"
            >
                <LeftHomePage />
                <RightHomePage />
            </Stack>
        </Container>
    );
}
