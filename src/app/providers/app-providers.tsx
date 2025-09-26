import { ThemeProvider } from "./theme-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>;
}
