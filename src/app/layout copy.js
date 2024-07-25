"use client";

import { Footer, NavBar } from "@/components";
import Aboutpage from "@/section/about/page";
import BlogPage from "@/section/blog/page";
import HomePage from "@/section/home/page";
import ProjectsPage from "@/section/projects/page";

export default function Layout() {
    return (
        <>
            <HomePage />
            {/* <ProjectsPage />
            <Aboutpage />
            <BlogPage /> */}
        </>
    );
}
