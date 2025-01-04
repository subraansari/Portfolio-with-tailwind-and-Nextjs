import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { navItems } from "@/data";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import "./globals.css";
import { ThemeProvider} from "@/components/ui/ThemeProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subra Ansari Portfolio",
  description: "Subra Ansari's Portfolio Created With Next.js and Tailwind.css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          {children}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
