import Cursor from "@/components/CustomCursor/Cursor";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Palash Kothi - A Luxury Resort near Bandhavgarh National Park",
  description: "Palash Kothi - A Luxury Resort near Bandhavgarh National Park, Where Comfort Meets Wilderness. Book Now and Experience the Best of Bandhavgarh. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin='anonymous' />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&amp;family=Jost:wght@400;500;600;700&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/img/logo/palash_kothi.png" type="image/x-icon" />
        <link rel="stylesheet" href="css/vendors.css" />
        <link rel="stylesheet" href="css/main.css" />
      </head>
      <body>
        <main>
          <Cursor/>
          <Header />
          {children}
          {/* <Footer /> */}

          <Script strategy="afterInteractive" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAz77U5XQuEME6TpftaMdX0bBelQxXRlM"></Script>
          <Script strategy="afterInteractive" src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js"></Script>
          <Script strategy="afterInteractive" src="js/vendors.js" ></Script>
          <Script strategy="afterInteractive" src="js/main.js" ></Script>
        </main>
      </body>
    </html>
  );
}
