import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Ayomide | Full Stack Developer",
  description:
    "Building scalable web applications, premium user experiences, and digital products.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Frontend Engineer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen bg-[#0A0A0A] text-white antialiased font-sans selection:bg-indigo-500/30 selection:text-white">
        
        {/* Global Background Glow */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/10 blur-[180px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[160px] rounded-full" />
        </div>

        {/* Main Site Wrapper */}
        <div className="relative min-h-screen flex flex-col">
          <Navbar />

          {/* Main Content */}
          <main className="flex-1 pt-24">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}