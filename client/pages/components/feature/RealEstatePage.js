import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faBed,
  faBathtub,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

export default function RealEstatePage(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const updateViewedRs = (id) => {
    Axios.put(`http://localhost:5000/api/realEstate/view/${id}`);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {currentItems.map((props) => {
          return (
            <div
              className="flex items-center justify-center"
              key={props.RealEstateId}
            >
              <div className="mb-10 w-full p-4">
                <div>
                  <img
                    src={props.imgURL}
                    alt="image real estate"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <div>
                    <div>
                      <Link
                        href="/product/[id]"
                        as={`/product/${props.RealEstateId}`}
                        onClick={() => {
                          updateViewedRs(props.RealEstateId);
                        }}
                      >
                        <a
                          className="font-semibold text-xl text-left hover:underline"
                          onClick={() => {
                            updateViewedRs(props.RealEstateId);
                          }}
                        >
                          <h3 className="text-left">{props.Title}</h3>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <span>
                        <FontAwesomeIcon
                          icon={faChartArea}
                          className="text-gray pr-2.5"
                        />
                      </span>
                      <span>
                        {props.Area} m<sup>2</sup>
                      </span>
                    </div>
                    <div className="pl-4">
                      <span>
                        <FontAwesomeIcon
                          icon={faBed}
                          className="text-gray pr-2.5"
                        />
                      </span>
                      <span>{props.MaxRoom}</span>
                    </div>
                    <div className="pl-4">
                      <span>
                        <FontAwesomeIcon
                          icon={faBathtub}
                          className="text-gray pr-2.5"
                        />
                      </span>
                      <span>{props.Toilet}</span>
                    </div>
                    <div className="pl-4">
                      <span>
                        <FontAwesomeIcon
                          icon={faCompass}
                          className="text-gray pr-2.5"
                        />
                      </span>
                      <span>{props.Direct}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-semibold text-end text-xl">
                      {props.Price} ETH
                    </h3>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="bg-cyan-400 px-4 py-2 rounded-sm hover:bg-emerald-500"
        previousLinkClassName="bg-cyan-400 p-2 rounded-sm hover:bg-emerald-500"
        nextLinkClassName="bg-cyan-400 p-2 rounded-sm hover:bg-emerald-500"
        activeLinkClassName="bg-red-500 text-white"
        className="flex items-center justify-center mb-12 gap-5 cursor-pointer font-semibold text-white "
      />
    </>
  );
}
