"use client";
import Header from "@/components/header";
import OnboardingForm from "@/components/onboarding-form";
import ScrollDownButton from "@/components/scroll-down-button";
import UIPortfolio from "@/components/ui-portfolio";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";

export default function Home() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: prefersDarkMode ? "dark" : "light" },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <div className="snap">
        <Header />
        <OnboardingForm />
        <ScrollDownButton />
      </div>
      <br />
      <br />
      <UIPortfolio />
    </ThemeProvider>
  );
}
