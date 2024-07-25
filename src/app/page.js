"use client";

import { Footer, NavBar } from "@/components";
import Layout from "@/layout/layout";
import { paths } from "@/mock/paths";
import { redirect } from "next/navigation";

export default function Page() {
    redirect(paths.home);
}
