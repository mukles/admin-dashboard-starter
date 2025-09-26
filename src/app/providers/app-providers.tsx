import { ThemeProvider } from "./theme-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider storageKey="theme-mode" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
