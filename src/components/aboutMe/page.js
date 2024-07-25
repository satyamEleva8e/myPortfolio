import { Stack, Typography } from "@mui/material";

export default function AboutMe() {
    return (
        <Stack>
            <Typography
                variant="body1"
                color="gray"
                width={0.5}
                paddingBottom={2}
            >
                Hello, I'm Satyam, based in New Delhi, India. My passion lies in
                the realm of information technology, where I specialize in
                application development, quality assurance, and system analysis.
            </Typography>
            <Typography
                variant="body1"
                color="gray"
                width={0.5}
                paddingBottom={2}
            >
                Outside of my professional pursuits, I am actively involved in
                volunteer work, particularly in child welfare initiatives, where
                I engage with underprivileged children through educational
                activities and events. My diverse experiences have shaped me
                into a versatile individual with a deep commitment to making a
                positive impact both professionally and within my community.
            </Typography>
            <Typography
                variant="body1"
                color="gray"
                width={0.5}
                paddingBottom={2}
            >
                I believe that design is about more than just making things look
                pretty it's about solving problems and creating intuitive,
                enjoyable experiences for users. Whether I'm working on a
                website, mobile app, or other digital product, I bring my
                commitment to design excellence and user-centered thinking to
                every project I work on.
            </Typography>
        </Stack>
    );
}
