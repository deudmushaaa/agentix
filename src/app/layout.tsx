import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentix | Smart Digital Infrastructure & AI Solutions",
  description: "Agentix (Pty) Ltd - Leading enabler of smart, secure, and sustainable digital infrastructure in Africa. Specialized in AI, Cloud, Cybersecurity, and IoT.",
  keywords: "ICT, AI Solutions, Cybersecurity, Cloud Hosting, IoT, Network Consultancy, Botswana, Agentix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
