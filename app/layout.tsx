import "./globals.css";
import { ThemeProvider } from "./NextThemeProviders";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ButtonToTop from "@/components/ButtonToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-slate-100 text-slate-950">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavBar />
          {children}
          <Footer />
          <ButtonToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
