"use client";
import React from "react";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <Backdrop />
      <div className="flex flex-1 flex-col xl:ml-[90px]">
        <AppHeader />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}






