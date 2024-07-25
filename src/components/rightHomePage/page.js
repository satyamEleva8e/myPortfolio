"use client";

//
import { useEffect, useState } from "react";
//
import { Stack, Typography } from "@mui/material";
//
import TextTransition, { presets } from "react-text-transition";
// import Style from "../style/homepage.module.css";

const roleData = ["Developer 🧐", "Teacher 😁", "Freelancer 🤫"];

export default function RightHomePage() {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((index) => index + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Stack width={1} alignItems="flex-start">
            <Stack>
                <Typography variant="h3" color="gray">
                    Hello, My name is
                </Typography>
                <Typography variant="h2" component="h1">
                    Satyam Kumar
                </Typography>
            </Stack>

            <Stack flexDirection="row" alignItems="center">
                <Typography variant="h3" color="gray">
                    I am a{" "}
                </Typography>
                <TextTransition
                    style={{
                        fontSize: "xxx-large",
                        marginLeft: "1vw",
                        color: "orange",
                    }}
                    springConfig={presets.wobbly}
                >
                    {roleData[textIndex % roleData.length]}{" "}
                </TextTransition>
            </Stack>
            <Typography
                variant="body1"
                color="gray"
                width={0.7}
                // sx={{
                //     overflow: "hidden",
                //     display: "-webkit-box",
                //     WebkitLineClamp: 8,
                //     lineClamp: 8,
                //     WebkitBoxOrient: "vertical",
                // }}
            >
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
            </Typography>
        </Stack>
    );
}
