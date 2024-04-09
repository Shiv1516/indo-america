import "@/styles/globals.css";
import Script from "next/script";
import Footer from "@/component/Footer";
import Header from "@/component/Header";

export default function App({ Component, pageProps }) {
  const paypalClientId =
    "AQ9XdVRBUsAfEvwBACKHEYlmHRE2yObZzpN_s-en7CuzZkOWopdHSpf-fJrbyuRjDFnk5F80SzNpQiDX";
  return (
    <>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=USD`}
        strategy="afterInteractive"
      />
      <Header />
      <Component {...pageProps} />

      <Footer />
    </>
  );
}
