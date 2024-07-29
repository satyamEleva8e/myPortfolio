// import AnimatedText from "@/components/AnimatedText";
// import Layout from "@/components/Layout";
// import Head from "next/head";
// import React, { useEffect, useRef } from "react";
// import profilePic from "../../public/images/profile/pic1.jpeg";
// import Image from "next/image";
// import { useInView, useMotionValue, useSpring } from "framer-motion";
// import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
// import Education from "@/components/Education";
// import TransitionEffects from "@/components/TransitionEffects";
// import { Typography } from "@mui/material";

// const AnimatedNumbers = ({ value }) => {
//     const ref = useRef(null);
//     const motionValue = useMotionValue(0);
//     const springValue = useSpring(motionValue, { duration: 3000 });
//     const isInView = useInView(ref, { once: true });

//     useEffect(() => {
//         if (isInView) {
//             motionValue.set(value);
//         }
//     }, [isInView, value, motionValue]);

//     useEffect(() => {
//         springValue.on("change", (latest) => {
//             if (ref.current && latest.toFixed(0) <= value) {
//                 ref.current.textContent = latest.toFixed(0);
//             }
//         });
//     }, [springValue, value]);
//     return <span ref={ref}></span>;
// };

// export default function AboutStatus() {
//     return (
//         <Typography>
//             <AnimatedNumbers value={15} />+
//         </Typography>
//     );
// }
