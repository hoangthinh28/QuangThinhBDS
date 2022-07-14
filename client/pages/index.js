import styles from "../styles/Home.module.css";
import Header from "./components/header/Header";
import ImageSlider from "./components/slider/ImageSlider";
import ImageData from "./components/slider/ImageData";
import Product from "./components/feature/Product";
import { ListProductData } from "./components/feature/ListProductData";

export default function Home() {
  const bgImgBanner =
    "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80";
  
  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
      <div className="mt-4">
        <ImageSlider sliders={ImageData} />
      </div>
      <div
        className="mt-6 bg-opacity-30 "
        style={{ backgroundImage: `url(${bgImgBanner})` }}
      >
        <h1 className="text-center italic font-serif mb-3 text-4xl text-slate-100 pt-6 font-semibold">
          Featured Real Estate
        </h1>
        <div className="flex items-center justify-center px-6">
          {ListProductData.map((each, index) => {
            return (
              <div className="p-9 text-white">
                <Product
                  // key={index}
                  image={each.image}
                  title={each.title}
                  area={each.area}
                  room={each.room}
                  toilet={each.toilet}
                  direction={each.direction}
                  price={each.price}
                  href="/"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-6 ">
        <h1 className="text-center italic font-serif mb-3 text-4xl text-sky-800 pt-6 font-semibold">
          Most Booked Apartment
        </h1>
        <div className="flex items-center justify-center px-6">
          {ListProductData.map((each, index) => {
            return (
              <div className="p-9 text-black">
                <Product
                  // key={index}
                  image={each.image}
                  title={each.title}
                  area={each.area}
                  room={each.room}
                  toilet={each.toilet}
                  direction={each.direction}
                  price={each.price}
                  href="/"
                  className=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
