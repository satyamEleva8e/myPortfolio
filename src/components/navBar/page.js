"use client";
export * from "@mui/material";
//
import { Avatar, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useTheme } from "@emotion/react";
import { GitHub, LinkedIn, X, Email } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import "./navBar.css";
import { navData } from "@/mock/paths";

const SOCIALS = [
    {
        icon: <LinkedIn />,
        label: "Linked In",
        link: "",
    },
    {
        icon: <GitHub />,
        label: "Github",
        link: "",
    },
    {
        icon: <X />,
        label: "X - Twitter",
        link: "",
    },
    {
        icon: <Email />,
        label: "Email",
        link: "",
    },
];

export default function NavBar() {
    const theme = useTheme();
    const route = useRouter();
    const path = usePathname();

    const handleNavigation = (slug) => {
        route.push(slug);
        // window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Stack
            width={1}
            sx={{
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Grid2
                container
                spacing={2}
                py={2}
                width={1}
                px={4}
                disableEqualOverflow
                sx={{
                    alignItems: "center",
                    maxWidth: theme?.breakpoints?.values.xl,
                }}
            >
                <Grid2 xs={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        {navData.map((data) => (
                            <Typography
                                variant="h5"
                                key={data?.key}
                                sx={{
                                    color: path.includes(data.href)
                                        ? theme?.palette?.grey[200]
                                        : theme?.palette?.grey[600],
                                    cursor: "pointer",
                                }}
                                onClick={() => handleNavigation(data?.href)}
                            >
                                {data?.name}
                            </Typography>
                        ))}
                    </Stack>
                </Grid2>
                <Grid2 xs={4} alignContent="center">
                    <Stack alignItems="center">
                        <Avatar
                            sx={{
                                height: theme?.spacing(7),
                                width: theme?.spacing(7),
                            }}
                        >
                            SK
                        </Avatar>
                    </Stack>
                </Grid2>
                <Grid2 xs={4}>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        {SOCIALS?.map((item, index) => (
                            <Tooltip
                                title={item?.label}
                                placement="bottom"
                                key={index}
                            >
                                <IconButton
                                    color="inherit"
                                    size="large"
                                    sx={{
                                        borderRadius: 2,
                                        background: theme?.palette?.grey[900],
                                        color: theme?.palette?.grey[400],
                                    }}
                                >
                                    {item?.icon}
                                </IconButton>
                            </Tooltip>
                        ))}
                    </Stack>
                </Grid2>
            </Grid2>
        </Stack>
    );
}
