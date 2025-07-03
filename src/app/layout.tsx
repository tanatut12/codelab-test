import { Viewport } from "next";

import "./globals.css";
import AppLayout from "@src/components/AppLayout";
import HomeLayout from "@src/Layout/HomeLayout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const dynamic = "force-dynamic";

export default async function Root({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppLayout>
      <HomeLayout>{children}</HomeLayout>
    </AppLayout>
  );
}

export const metadata = {
  title: "Codelab Dev Test",
  description: "Codelab Dev Test Description",
};
