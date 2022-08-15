import styles from "../styles/Home.module.css";
import ImageSlider from "./components/slider/ImageSlider";
import ImageData from "./components/slider/ImageData";
import Product from "./components/feature/Product";
import Phu from "./components/footer/Phu";
import End from "./components/footer/End";
import Slider from "./components/slider/Slider";
import SubProduct from "./components/feature/SubProduct";
import React, { useState, useEffect } from "react";
import Axios from "axios";
export default function Home() {
  const [pdList, setPdList] = useState([]);
  const [viewList, setViewList] = useState([]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetchRsList();
    fetchViewList();
    fetchBookedList();
  }, []);
  async function fetchRsList() {
    let promise = Axios({
      url: "http://localhost:5000/api/realEstate/",
      method: "GET",
    });
    promise
      .then((rs) => {
        setPdList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchViewList() {
    let promise = Axios({
      url: "http://localhost:5000/api/user/topview",
      method: "GET",
    });
    promise
      .then((rs) => {
        setViewList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchBookedList() {
    let promise = Axios({
      url: "http://localhost:5000/api/user/topbooking",
      method: "GET",
    });
    promise
      .then((rs) => {
        setBookList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const bgImgBanner =
    "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80";

  return (
    <div className={styles.container}>
      <div>{/* <Header /> */}</div>
      <div className="mt-4">
        <ImageSlider sliders={ImageData} />
      </div>
      <div className="pt-16">
        <Phu />
      </div>
      <div
        className="mt-6 bg-opacity-30 "
        style={{ backgroundImage: `url(${bgImgBanner})` }}
      >
        <h1 className="text-center italic font-serif mb-3 text-4xl text-slate-100 pt-6 font-semibold">
          Top Viewed Real Estate
        </h1>
        <div className="flex items-center justify-center px-6">
          {viewList.map((each, index) => {
            return (
              <div className="p-9 text-white">
                <Product
                  key={each.RealEstateId}
                  id={each.RealEstateId}
                  image={each.imgURL}
                  title={each.Title}
                  area={each.Area}
                  room={each.MaxRoom}
                  toilet={each.Toilet}
                  direction={each.Direct}
                  price={each.Price}
                  view={each.countViewed}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-10 bg-gray-100">
        <Slider list={pdList} />
      </div>
      <div className="mt-6 ">
        <h1 className="text-center italic font-serif mb-3 text-4xl text-sky-800 pt-6 font-semibold">
          Most Booked Apartment
        </h1>
        <div className="flex items-center justify-center px-6">
          {bookList.map((each, index) => {
            return (
              <div className="p-9 text-black">
                <SubProduct
                  key={each.RealEstateId}
                  id={each.RealEstateId}
                  image={each.imgURL}
                  title={each.Title}
                  area={each.Area}
                  room={each.MaxRoom}
                  toilet={each.Toilet}
                  direction={each.Direct}
                  price={each.Price}
                  book={each.countBooked}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pb-16 bg-slate-50 w-full">
        <End />
      </div>
      <section className=" bg-gray-100 pt-10 ">
        <div className="flex justify-center max-width w-full pr-4 pl-4 mr-auto ml-auto">
          <div className="flex flex-wrap -mr-4 -ml-4">
            <div className="col-lg-12 text-center">
              <h2 className="font-serif font-semibold text-black text-4xl flex flex-wrap -mr-4 -ml-4 ">
                Don’t forget to follow us
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full">
        <div className="flex justify-center w-full pr-4 pl-4 mr-auto ml-auto pb-10 bg-gray-100">
          <div className="flex justify-center flex-wrap w-full -mr-4 -ml-4 ">
            <img
              className="h-72 w-64 vertical-align border-none"
              src="https://preview.colorlib.com/theme/homes/img/room-pic/x1.jpg.pagespeed.ic.8GLbaMIWgs.webp"
              alt=""
              data-pagespeed-url-hash="1029268423"
              onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
            />
            <img
              className="h-72 w-64 vertical-align border-none"
              src="https://preview.colorlib.com/theme/homes/img/room-pic/x2.jpg.pagespeed.ic.y1g2bOOlsp.webp"
              alt=""
              data-pagespeed-url-hash="1323768344"
              onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
            />
            <img
              className="h-72 w-64 vertical-align border-none"
              src="https://preview.colorlib.com/theme/homes/img/room-pic/x3.jpg.pagespeed.ic.iTwpsd0-5f.webp"
              alt=""
              data-pagespeed-url-hash="1618268265"
              onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
            />
            <img
              className="h-72 w-64 vertical-align border-none"
              src="https://preview.colorlib.com/theme/homes/img/room-pic/x4.jpg.pagespeed.ic.B2gWDwS-Sc.webp"
              alt=""
              data-pagespeed-url-hash="1912768186"
              onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
            />
            <img
              className="h-72 w-64 vertical-align border-none"
              src="https://preview.colorlib.com/theme/homes/img/room-pic/x5.jpg.pagespeed.ic.-6Z9Qh-xBm.webp"
              alt=""
              data-pagespeed-url-hash="2207268107"
              onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
