import "./globals.css";
import type { Metadata } from "next";
import { FixedPlugin, Layout } from "@/components";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { I18nProvider } from "@/contexts/I18nContext";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { AuthProvider } from "@/contexts/AuthContext";

// Using system fonts as fallback due to Google Fonts connectivity issues
const roboto = {
  className: "font-sans"
};

export const metadata: Metadata = {
  title: "IQHUB",
  description:
    "We are thrilled to offer you a Free App Presentation Template, a beautifully designed and user-friendly Tailwind CSS and Material Tailwind theme crafted specifically for app developers like you. The free app presentation template includes key features such as hero, features, FAQ, stats, and testimonial sections.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={roboto.className}>
        <AuthProvider>
          <ThemeProvider>
            <I18nProvider>
              <CurrencyProvider>
                <Layout>
                  {children}
                  <FixedPlugin />
                </Layout>
              </CurrencyProvider>
            </I18nProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
