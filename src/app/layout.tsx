import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luis Antonio Serrano García | Desarrollador .NET & Full-Stack",
  description:
    "Portafolio de ingeniería de Luis Antonio Serrano García. Desarrollador .NET y Full-Stack enfocado en APIs RESTful, plataformas SaaS multitenant, SQL Server, Next.js/React, Blazor y Python.",
  keywords: [
    "Luis Antonio Serrano García",
    "Desarrollador .NET",
    "Full-Stack Developer",
    "C#",
    "ASP.NET Core",
    "Entity Framework Core",
    "SQL Server",
    "Blazor WebAssembly",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Luis Antonio Serrano García" }],
  openGraph: {
    title: "Luis Antonio Serrano García | Desarrollador .NET & Full-Stack",
    description:
      "APIs RESTful, plataformas SaaS multitenant en .NET, monitoreo de red en Python e interfaces web modernas con Next.js y Blazor.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
