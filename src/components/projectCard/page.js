import { PROJECTCARDIMG } from "@/mock";
import { useTheme } from "@emotion/react";
import { Box, Card, Container, Stack } from "@mui/material";
import {
    calcLength,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef } from "react";
function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
    const theme = useTheme();

    return (
        <Container
            sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                p: 4,
            }}
        >
            <Box
                ref={ref}
                sx={{
                    maxWidth: theme.spacing(85),
                    borderRadius: 4,
                    overflow: "hidden",
                }}
            >
                <img src={id.projet1} alt="Project Card" />
            </Box>
            <motion.h2
                style={{
                    y,
                    left: "240px",
                    borderRadius: "16px",
                    padding: "8px",
                    fontWeight: "700",
                    fontSize: "56px",
                    position: "absolute",
                    letterSpacing: "-3px",
                    background: "orange",
                }}
            >{`#${id.name}`}</motion.h2>
        </Container>
    );
}
export default function ProjectCard() {
    const theme = useTheme();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            {PROJECTCARDIMG.map((image, i) => (
                <Image key={i} id={image} />
            ))}
            <motion.div
                className="progress"
                style={{
                    scaleX,
                    position: "fixed",
                    height: "5px",
                    left: "0",
                    right: "0",
                    background: theme.palette.text.primary,
                    bottom: "0",
                }}
            />
        </>
    );
}
