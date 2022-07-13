import "../styles/globals.css";
import "./app.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="MzXR4OAj2vtxFvYZm4fGRMhNeGXzsTqj4Aw3pOlW"
      serverUrl="https://r7x1mnbjwtyn.usemoralis.com:2053/server"
    >
      <div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </MoralisProvider>
  );
}

export default MyApp;
