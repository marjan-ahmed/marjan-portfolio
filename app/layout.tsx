        import type { Metadata } from "next";
        import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
        import "./globals.css";
        import { ThemeProvider } from "@/components/theme-provider";
        import Navbar from "@/components/Navbar";
        import Footer from "@/components/Footer";
        
        const geistSans = Geist({
          variable: "--font-geist-sans",
          subsets: ["latin"],
        });
        
        const geistMono = Geist_Mono({
          variable: "--font-geist-mono",
          subsets: ["latin"],
        });
        
        const spaceGrotesk = Space_Grotesk({
          subsets: ["latin"],
          display: "swap",
          weight: ["300", "400", "500", "600", "700"],
        })
        
        export const metadata: Metadata = {
          title: "Marjan Ahmed - Full-Stack & Agentic AI Developer Portfolio",
          description: "Explore the portfolio of Marjan Ahmed, showcasing full-stack web development projects, agentic AI experiments, and innovative software solutions.",
           verification: {
                google: "TsiePAP5LOUi2bOZo6Cnnm8Bjq5YLZe9vXU5SbZxmMQ",
          },
        };
        
        export default function RootLayout({
          children,
        }: Readonly<{
          children: React.ReactNode;
        }>) {
          return (
            <html lang="en" className="scroll-smooth" suppressHydrationWarning>
              <meta name="google-site-verification" content="TsiePAP5LOUi2bOZo6Cnnm8Bjq5YLZe9vXU5SbZxmMQ" />
              <body
                className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.className}  antialiased`}
                cz-shortcut-listen="true"
              >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                  >
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
              </body>
            </html>
          );
        }
