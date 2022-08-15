import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import add from "date-fns/add";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { nftaddress, nftmarketaddress } from "../../config";
import Web3Modal from "web3modal";
import { BigNumber, ethers } from "ethers";

import QTMarket from "../../artifacts/contracts/QTMarket.sol/QTMarket.json";

import Axios from "axios";

export default function Product() {
  const router = useRouter();
  const id = router.query.id;

  const [pdList, setPdList] = useState([]);
  const [address, setAddress] = useState([]);
  const [listDate, setListDate] = useState([]);

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: add(new Date(), { days: 1 }),
      key: "selection",
    },
  ]);

  useEffect(() => {
    fetchSigleRsList();
    connect();
    getListDate();
  }, []);

  async function connect() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    setAddress(signerAddress);
  }

  async function fetchSigleRsList() {
    let promise = Axios({
      url: `http://localhost:5000/api/realEstate/${id}`,
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

  let arrDate = [];
  const startDate = [format(date[0].startDate, "dd/MM/yyyy")];
  const endDate = [format(date[0].endDate, "dd/MM/yyyy")];
  arrDate.push(startDate, endDate);
  const diff = Math.abs(
    date[0].endDate.getTime() - date[0].startDate.getTime()
  );
  const noofdays = Math.ceil(diff / (1000 * 3600 * 24));
  // let days = BigNumber.from(noofdays);

  const data = pdList.map((x) => {
    return {
      RealEstateTitle: x.Title,
      RoomCode: x.RoomCode,
      Address: x.Address,
      imgURL: x.imgURL,
      Price: x.Price * noofdays,
      Checkint: date[0].startDate,
      Checkout: date[0].endDate,
      RealEstateId: x.RealEstateId,
      ethAddress: address,
    };
  });

  async function rentRealEstate(nft) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      nftmarketaddress,
      QTMarket.abi,
      signer
    );
    // let a = BigNumber.from(nft.Price * days);
    // const pricePerDay = ethers.utils.parseUnits(a.toString(), "ether");

    let a = nft.Price * noofdays;
    // let pricePerDay = utils.parseEther(a.toString());
    const price = ethers.utils.parseEther(a.toString());

    const transaction = await contract.addDatesBooked(
      nftaddress,
      nft.RealEstateId,
      [],
      { value: price }
    );
    await transaction.wait();
    createData(nft);
    router.push("/profile");
  }

  const createData = (nft) => {
    Axios.post(`http://localhost:5000/api/datebooking/`, data[0])
      .then((rs) => {
        console.log(rs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function getListDate() {
    let promise = Axios({
      url: `http://localhost:5000/api/datebooking/date/booking/${id}`,
      method: "GET",
    });
    promise
      .then((rs) => {
        setListDate(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  let getDateBooked = [];

  listDate.map((date) => {
    return getDateBooked.push({
      from: new Date(date.Checkint),
      to: new Date(date.Checkout),
    });
  });

  return (
    <div className="pb-6">
      {pdList.map((each) => {
        return (
          <div className="mt-9">
            <div className="flex justify-center w-full max-w-3xl">
              <div className="ml-1">
                <Link href="/">
                  <a>
                    <img
                      src="https://stay.vinhomes.vn/on/demandware.static/Sites-vhm_leasing_en-Site/-/default/dw991a7401/images/icon/breadcrumb-home.svg"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="flex mt-1">
                <div className="ml-2 font-bold text-xs">
                  <p>/</p>
                </div>
                <div className="ml-2">
                  <p className="font-bold text-xs">{each.Title}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <div className="w-full max-w-6xl flex flex-col gap-2 relative">
                <button className="absolute right-1 top p-3 text-white bg-cyan-500 rounded hover:bg-cyan-600 font-bold">
                  Reserve or Book Now!
                </button>
                <h1 className="text-2xl font-bold">{each.Title}</h1>
                <div className="flex items-center text-sm gap-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span className="font-medium text-base">{each.Address}</span>
                </div>
                <div className="flex flex-wrap justify-between">
                  <img
                    className="w-1/3  object-cover pr-1 pb-2"
                    src={each.imgURL}
                    alt=""
                  />
                  <img
                    className="w-1/3  object-cover pr-1 pb-2"
                    src={each.imgURL}
                    alt=""
                  />
                  <img
                    className="w-1/3  object-cover pr-1 pb-2"
                    src={each.imgURL}
                    alt=""
                  />
                  <img
                    className="w-1/3  object-cover pr-1 pb-2"
                    src={each.imgURL}
                    alt=""
                  />
                  <img
                    className="w-1/3  object-cover pr-1 pb-2"
                    src={each.imgURL}
                    alt=""
                  />
                  <img
                    className="w-1/3  object-cover pr-1 pb-2"
                    src={each.imgURL}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center px-44">
              <div className="w-2/3">
                <div className="flex">
                  <div className="w-2/3">
                    <div className="flex gap-20">
                      <div className="p-4">
                        <div className="flex border-b pb-2">
                          <span>
                            <b>Bedroom</b>
                          </span>
                          <p className="ml-7 font-medium">{each.MaxRoom}</p>
                        </div>
                        <div className="flex border-b py-2">
                          <span>
                            <b>Toilet</b>
                          </span>
                          <p className="ml-14 font-medium">{each.Toilet}</p>
                        </div>
                        <div className="flex border-b py-2">
                          <span>
                            <b>Area</b>
                          </span>
                          <p className="ml-16 font-medium">
                            {each.Area}m<sup>2</sup>
                          </p>
                        </div>
                      </div>
                      <div className="p-4 pb-2">
                        <div className="flex border-b pb-2">
                          <span>
                            <b>People</b>
                          </span>
                          <p className="ml-10 font-medium">{each.People}</p>
                        </div>
                        <div className="flex border-b py-2">
                          <span>
                            <b>Building</b>
                          </span>
                          <p className="ml-7 font-medium">{each.Building}</p>
                        </div>
                        <div className="flex border-b py-2">
                          <span>
                            <b>Rent Cost</b>
                          </span>
                          <p className="ml-5 font-medium">
                            {each.price} ETH/day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex text-sm text-left px-4 pb-2">
                      <span>
                        <b>Detail</b>
                      </span>
                      <p className="ml-5 font-medium">{each.Detail}</p>
                    </div>
                  </div>
                </div>
                <h1 className="font-semibold text-2xl pb-3">
                  LIST OF APARTMENTS FOR RENT (1)
                </h1>
                <table className="p-4 w-3/4">
                  <tr className="py-3 text-left">
                    <th>Room Code</th>
                    <th>Building</th>
                    <th>Floor</th>
                    <th>Direction</th>
                  </tr>
                  <tr className="bg-slate-300">
                    <td>{each.RoomCode}</td>
                    <td>{each.Building}</td>
                    <td>{each.Floor}</td>
                    <td>{each.Direct}</td>
                  </tr>
                </table>
                <div className="pt-6">
                  <h1 className="font-semibold text-2xl py-3">
                    FURNITURE, EQUIPMENT
                  </h1>
                  <table className="p-4 w-3/4">
                    <tr className="bg-white text-left flex border-b py-3">
                      <td className="flex">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwed9c29cb/images/Furniture-Icon/bed.svg"
                          alt=""
                        />
                        <span className="pl-3">Bed + mattress</span>
                      </td>
                      <td className="flex ml-40 pl-1">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwf3358920/images/Furniture-Icon/desk_work.svg"
                          alt=""
                        />
                        <span className="pl-3">Desk</span>
                      </td>
                    </tr>
                    <tr className="bg-white text-left flex border-b py-3">
                      <td className="flex">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dw9b363592/images/Furniture-Icon/dinner-table%201.svg"
                          alt=""
                        />
                        <span className="pl-3">Dining table and chairs</span>
                      </td>
                      <td className="flex ml-28">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dw3907e100/images/Furniture-Icon/wardrobe.svg"
                          alt=""
                        />
                        <span className="pl-3">Wardrobe</span>
                      </td>
                    </tr>
                    <tr className="bg-white text-left flex border-b py-3">
                      <td className="flex">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwfeade59b/images/Furniture-Icon/kitchen_cabinet.svg"
                          alt=""
                        />
                        <span className="pl-3">Kitchen + Cabinets</span>
                      </td>
                      <td className="flex ml-32">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwd34cd67d/images/Furniture-Icon/shower_cabin.svg"
                          alt=""
                          className="pl-3"
                        />
                        <span className="pl-3">Freestanding bathtub</span>
                      </td>
                    </tr>
                    <tr className="bg-white text-left flex border-b py-3">
                      <td className="flex">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dw0fb39b1a/images/Furniture-Icon/air_conditioner.svg"
                          alt=""
                          className="pr-1"
                        />
                        <span className="pl-3">Air conditioning</span>
                      </td>
                      <td className="flex ml-40">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dw1c65c917/images/Furniture-Icon/sofa.svg"
                          alt=""
                        />
                        <span className="pl-3">Sofa</span>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="pt-6">
                  <h1 className="font-semibold text-2xl py-3">UTILITIES </h1>
                  <table className="p-4 w-3/4">
                    <tr className="bg-white text-left flex border-b py-3">
                      <td className="flex">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwaceb4762/images/Furniture-Icon/11-park.svg"
                          alt=""
                        />
                        <span className="pl-3">Parking lot</span>
                      </td>
                      <td className="flex ml-40">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwa1ac88ea/images/Furniture-Icon/Beboi_trongnha.svg"
                          alt=""
                        />
                        <span className="pl-3">Swimming pool</span>
                      </td>
                    </tr>
                    <tr className="bg-white text-left flex border-b py-3">
                      <td className="flex">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc2392472/images/Furniture-Icon/Co_danang.svg"
                          alt=""
                        />
                        <span className="pl-3">Multi-purpose lawn</span>
                      </td>
                      <td className="flex ml-24">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dw716db60c/images/Furniture-Icon/Sanbong.svg"
                          alt=""
                        />
                        <span className="pl-3">Table tennis court</span>
                      </td>
                    </tr>
                    <tr className="bg-white text-left flex border-b py-3">
                      <td className="flex">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwb51b7caa/images/Furniture-Icon/Sanchoi.svg"
                          alt=""
                        />
                        <span className="pl-3">Children's playground</span>
                      </td>
                      <td className="flex ml-20 pd-2">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwa9b7bbcd/images/Furniture-Icon/badminton.svg"
                          alt=""
                        />
                        <span className="pl-3">Badminton yard</span>
                      </td>
                    </tr>
                    <tr className="bg-white text-left flex border-b py-3">
                      <td className="flex">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dw4ef43c4f/images/Furniture-Icon/basketball-hoop%201.svg"
                          alt=""
                        />
                        <span className="pl-3">Basketball yard</span>
                      </td>
                      <td className="flex ml-32">
                        <img
                          src="https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dw397f28b6/images/Furniture-Icon/event-tent%201.svg"
                          alt=""
                        />
                        <span className="pl-3">Landscape hut</span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <div className="p-4 shadow-[0_1px_4px_rgba(0,0,0,0.16)] bg-yellow-200 mb-64">
                <div className="flex py-2 justify-between">
                  <label className="text-xl font-medium">Price</label>
                  <h2 className="text-lg">
                    <b>{each.Price} ETH</b> ({noofdays} day)
                  </h2>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <label className="font-medium text-base">
                      Check in Date
                    </label>
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="ml-6 cursor-pointer bg-white p-1 px-5"
                    >{`${[format(date[0].startDate, "dd/MM/yyyy")]} to ${[
                      format(date[0].endDate, "dd/MM/yyyy"),
                    ]}`}</span>
                  </div>

                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      ranges={date}
                      className="absolute ml-5 -bottom-3/4 z-50"
                      minDate={new Date()}
                    />
                  )}
                  <p className="text-red-600 font-medium text-sm text-left mt-3">
                    *Please check available days below for a reservation!
                  </p>
                  <DayPicker
                    disabled={getDateBooked}
                    mode="range"
                    className="m-auto my-3 text-red-600"
                    defaultMonth={new Date()}
                    fromMonth={new Date()}
                    captionLayout="dropdown"
                    modifiersStyles={{
                      disabled: {
                        fontSize: "20px",
                        fontStyle: "oblique",
                        fontWeight: "700",
                        textDecorationLine: "line-through",
                        color: "black",
                      },
                      today: {
                        color: "red",
                        fontWeight: "800",
                        fontSize: "19px",
                      },
                    }}
                  />
                </div>

                <div className="flex py-2 justify-between">
                  <label className="font-medium text-2xl">Total</label>
                  <span className="font-medium text-2xl">
                    {each.Price * noofdays} ETH
                  </span>
                </div>
                <button
                  className=" w-full text-white p-2  bg-cyan-500 rounded hover:bg-cyan-600"
                  onClick={() => rentRealEstate(each)}
                >
                  Reserve or Book Now!
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
