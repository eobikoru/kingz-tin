import type { Metadata } from "next";
import "./globals.css";
import 'antd/dist/reset.css';
import Navbar from "@/src/component/navbar";
import Footer from "@/src/component/footer";
import NextTopLoader from 'nextjs-toploader';
export const metadata: Metadata = {
  title: "Tinaus Kingz",
  description: "Electricals products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <NextTopLoader 
       color="#00114B"
       initialPosition={0.08}
       crawlSpeed={200}
       height={3}
       crawl={true}
       showSpinner={false}
       easing="ease"
       speed={200}
       shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
