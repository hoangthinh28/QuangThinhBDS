import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export function BookedProduct(props) {
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

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {currentItems.map((props) => {
          return (
            <div className="p-3 hover:shadow-[0_4px_0px_rgb(0,0,0)]">
              <div>
                <img
                  key={props.BookingID}
                  src={props.imgURL}
                  className="rounded"
                  alt="image product"
                />
              </div>
              <div className="text-left text-lg">
                <h3 className="font-semibold">{props.RealEstateTitle}</h3>
                <p>Address: {props.Address}</p>
                <p>Room code: {props.RoomCode}</p>
              </div>
              <div className="text-left text-lg">
                <p>
                  Check in: 14h00{" "}
                  {new Date(props.Checkint).toLocaleDateString()}
                </p>
                <p>
                  Check out: 12h00{" "}
                  {new Date(props.Checkout).toLocaleDateString()}
                </p>
              </div>
              <div className="price">
                <h3 className="font-semibold text-end	text-xl">
                  Total: {props.Price} ETH
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
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
      </div>
    </>
  );
}
