import "./globals.css";
import AuthProvider from "./components/AuthProvider";
import AuthRedirect from "./components/AuthRedirect";
import OneSignalProvider from "./components/OneSignalProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <AuthRedirect>
          <AuthProvider>
            <OneSignalProvider />
            {children}
          </AuthProvider>
        </AuthRedirect>
      </body>
    </html>
  );
}