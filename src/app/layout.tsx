import type { Metadata } from "next";
import { Lexend, Montserrat } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Providers } from "@/components/Providers";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const appName = process.env.NEXT_PUBLIC_APP_NAME || "CapitalPay";
const defaultLogoUrl = process.env.NEXT_PUBLIC_LOGO_URL || "/SITE.png";
const logoUrl = appName === "Pesanest" ? "/pesanest/pesanest-light-new.png" : defaultLogoUrl;

export const metadata: Metadata = {
  title: `${appName} expense system`,
  description: "Smart expense management and automated approval system",
  icons: {
    icon: `${logoUrl}?v=2`,
    shortcut: `${logoUrl}?v=2`,
    apple: `${logoUrl}?v=2`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`antialiased min-h-screen ${lexend.variable} ${GeistSans.variable} ${montserrat.variable} font-sans`} style={{ backgroundColor: 'var(--gds-bg)', color: 'var(--gds-text-main)' }} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
