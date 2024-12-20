import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <Toaster/>
        {/* <Card/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
