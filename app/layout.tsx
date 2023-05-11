import "./globals.css";
import AuthProvider from "../components/auth/AuthProvider";
import ActiveStatus from "../components/ui/avatar/ActiveStatus";
import ToasterToggle from "../components/ui/toaster/ToasterToggle";

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
    <html lang="en">
      <body>
        <AuthProvider>
          <ToasterToggle />
          <ActiveStatus />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
