import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Maven_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const MavenPro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VagasNorteJs",
  description:
    "O VagasNorteJs conecta candidatos a empregos ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${MavenPro.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
