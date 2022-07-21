import "../styles/globals.css";
import "./app.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
