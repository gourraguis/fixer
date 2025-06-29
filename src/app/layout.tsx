import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Abderrahmane Gourragui | Software Engineer",
  description:
    "The AI-Powered Portfolio of Abderrahmane Gourragui, a software engineer specializing in building scalable web applications and AI-driven solutions.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Abderrahmane Gourragui | Software Engineer",
    description:
      "The AI-Powered Portfolio of Abderrahmane Gourragui, a software engineer specializing in building scalable web applications and AI-driven solutions.",
    url: "https://gourragui.com",
    siteName: "Abderrahmane Gourragui's Portfolio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abderrahmane Gourragui | Software Engineer",
    description:
      "The AI-Powered Portfolio of Abderrahmane Gourragui, a software engineer specializing in building scalable web applications and AI-driven solutions.",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abderrahmane Gourragui",
    url: "https://gourragui.com",
    sameAs: [
      "https://www.linkedin.com/in/gourraguis/",
      "https://github.com/gourraguis",
    ],
  };

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {process.env.GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
