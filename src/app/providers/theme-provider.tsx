"use client";

import React, { createContext, useContext, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type Coords = { x: number; y: number };

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: (coords?: Coords) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [themeState, setThemeState] = useState<{ currentMode: Theme }>({
    currentMode: props.defaultTheme || "light",
  });

  const handleThemeChange = (newMode: Theme) => {
    setThemeState({ ...themeState, currentMode: newMode });
  };

  const handleThemeToggle = (coords?: Coords) => {
    const root = document.documentElement;
    const newMode = themeState.currentMode === "light" ? "dark" : "light";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!document.startViewTransition || prefersReducedMotion) {
      handleThemeChange(newMode);
      return;
    }

    if (coords) {
      root.style.setProperty("--x", `${coords.x}px`);
      root.style.setProperty("--y", `${coords.y}px`);
    }

    document.startViewTransition(() => {
      handleThemeChange(newMode);
    });
  };

  const value: ThemeProviderState = {
    theme: themeState.currentMode,
    setTheme: handleThemeChange,
    toggleTheme: handleThemeToggle,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
