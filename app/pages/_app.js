import { useRouter } from "next/router";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import "react-datetime/css/react-datetime.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/"; // Adjust the home page path accordingly

  return (
    <div className="flex flex-col justify-between min-h-screen ">
      {!isHomePage && <Navbar />}
      <Component {...pageProps} />
      {!isHomePage && <Footer />}
    </div>
  );
}
