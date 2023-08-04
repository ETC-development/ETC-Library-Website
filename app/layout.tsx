import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ENSIA Hub",
    description: "An online library that includes all the studying resources that are used in The National Higher School of Artificial Intelligence",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Kalam&family=Montserrat:wght@200;300;400;500;600;700;800&family=Poppins&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
