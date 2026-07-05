import "./globals.css";
import type { Metadata } from "next";
import AuthProvider from "./components/AuthProvider";
import AuthRedirect from "./components/AuthRedirect";
import OneSignalProvider from "./components/OneSignalProvider";
export const metadata: Metadata = {
  title: "Gulpy",
  description: "물 마실 시간을 알려주는 앱",
  manifest: "/manifest.json",

  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png",
    shortcut: "/icon-192.png",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Gulpy",
  },
};

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