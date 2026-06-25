import "./globals.css";
import AuthProvider from "./components/AuthProvider";
import AuthRedirect from "./components/AuthRedirect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthRedirect>
      <AuthProvider>
        <html>
          <body>{children}</body>
        </html>
      </AuthProvider>
    </AuthRedirect>
  );
}
