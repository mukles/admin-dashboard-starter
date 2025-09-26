"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  storageKey: string;
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type Coords = { x: number; y: number };

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: (newMode: Theme, coords?: Coords) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  storageKey = "theme-mode",
  defaultTheme = "system",
  ...props
}: ThemeProviderProps) {
  const [themeState, setThemeState] = useState<{ currentMode: Theme }>(() => ({
    currentMode: (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  }));

  useEffect(() => {
    const root = document.documentElement;
    if (!root) return;
    updateThemeClass(root, themeState.currentMode);
  }, [themeState]);

  const handleThemeChange = (newMode: Theme) => {
    localStorage.setItem(storageKey, newMode);
    setThemeState({ ...themeState, currentMode: newMode });
  };

  const handleThemeToggle = (currentMode: Theme, coords?: Coords) => {
    const root = document.documentElement;

    let newMode = currentMode;

    if (newMode === "system") {
      newMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!document.startViewTransition || prefersReducedMotion) {
      handleThemeChange(currentMode);
      return;
    }

    if (coords) {
      root.style.setProperty("--x", `${coords.x}px`);
      root.style.setProperty("--y", `${coords.y}px`);
    }

    localStorage.setItem(storageKey, currentMode);
    document.startViewTransition(() => {
      handleThemeChange(currentMode);
    });
  };

  const updateThemeClass = (root: HTMLElement, mode: Theme) => {
    if (mode === "light") {
      root.classList.remove("dark");
    } else if (mode === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    } else {
      root.classList.add("dark");
    }
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
