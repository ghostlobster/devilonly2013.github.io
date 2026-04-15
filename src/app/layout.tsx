import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { MatrixRain } from "@/components/MatrixRain";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Personal Blog",
  description: "Knowledge base and learned protocols.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="terminal" themes={['terminal', 'cyberpunk', 'retro']}>
          <div className="layout-container min-h-screen flex flex-col relative z-0">
              <MatrixRain />
              <ThemeSwitcher />
              <main className="flex-1 p-4 md:p-8 relative z-10">
                {children}
              </main>
              <InteractiveTerminal />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
