import "./globals.css";
import AuthProvider from "../components/auth/AuthProvider";
import ActiveStatus from "../components/ui/avatar/ActiveStatus";
import { Toaster } from "@/components/ui/toast/toaster";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Messenger",
  description: "Messenger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <Toaster />
            <ActiveStatus />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
