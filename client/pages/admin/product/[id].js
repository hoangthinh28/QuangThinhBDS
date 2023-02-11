import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import Link from "next/link";
import Sidebar from "../Sidebar";

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import QTMarket from "../../../artifacts/contracts/QTMarket.sol/QTMarket.json";
import NFT from "../../../artifacts/contracts/NFT.sol/NFT.json";
import { nftaddress, nftmarketaddress } from "../../../config";

import { formatUnits } from "ethers/lib/utils";

export default function Detail() {
  const router = useRouter();
  const id = router.query.id;
  const [pbList, setPbList] = useState([]);
  const [plList, setPlList] = useState([]);
  let createAddress;

  useEffect(() => {
    if (router.isReady) {
      fetchSigleRsList();
      fetchSigleBoList();
    }
  }, [router.isReady]);

  async function fetchSigleRsList() {
    let promise = Axios({
      url: `http://localhost:5000/api/realEstate/${id}`,
      method: "GET",
    });
    promise
      .then((rs) => {
        setPbList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchSigleBoList() {
    let promise = Axios({
      url: `http://localhost:5000/api/datebooking/date/bookingre/${id}`,
      method: "GET",
    });
    promise
      .then((rs) => {
        setPlList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function updateIsPaymented() {
    Axios.post(`http://localhost:5000/api/datebooking/paymented/${id}`)
      .then((rs) => {
        console.log(rs);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // get ethAddress created
  pbList.map((rs) => {
    createAddress = rs.ethAddress;
    return createAddress;
  });

  //count total
  let total = 0;
  plList.map((each) => {
    total += each.Price;
    return total;
  });

  async function transferMoney() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      nftmarketaddress,
      QTMarket.abi,
      signer
    );

    const price = ethers.utils.parseEther(total.toString());

    const transaction = await contract.sendTransfer(createAddress, {
      value: price,
    });

    await transaction.wait();
    await updateIsPaymented();
    router.push("/admin");
  }

  return (
    <div className="bg-slate-400">
      <Sidebar />
      {pbList.map((each) => {
        return (
          <div className="float-right w-4/5 pl-20 -mt-80 ">
            <div className="ml-1 -mt-52 ">
              <Link href="/">
                <a>
                  <img
                    src="https://stay.vinhomes.vn/on/demandware.static/Sites-vhm_leasing_en-Site/-/default/dw991a7401/images/icon/breadcrumb-home.svg"
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div className="flex -mt-5">
              <div className="ml-2 font-bold text-xs pl-6">
                <p>/</p>
              </div>
              <div className="ml-2">
                <p className="font-bold text-xs">{each.Title}</p>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <div className="w-full max-w-6xl flex flex-col gap-2 relative">
                <h1 className="text-2xl font-bold">{each.Title}</h1>
              </div>
            </div>
            <div className="flex py-2 justify-between">
              <label className="text-xl font-medium">Price</label>
              <h2 className="text-lg pr-64">
                <b>{each.Price} ETH/Day</b>
              </h2>
            </div>
            <div className="flex py-2 justify-between">
              <label className="text-xl font-medium">CreateAt</label>
              <h2 className="text-lg pr-64">
                <b>{each.ethAddress}</b>
              </h2>
            </div>
          </div>
        );
      })}
      <div className="float-right w-4/5 pl-20 -mt-96 pr-40">
        <div className="w-full max-w-6xl flex flex-col gap-2 relative ">
          <h1 className="text-2xl font-bold">History Transaction</h1>
        </div>
        <div className="overflow-x-auto bg-white border-2 border-black ">
          <table className=" w-full  bg-white border-2 border-black text-center">
            <thead>
              <tr>
                <th className="border-2 border-black">BookingID</th>
                <th className="border-2 border-black">Checkint</th>
                <th className="border-2 border-black">Checkout</th>
                <th className="border-2 border-black">Address Booking</th>
                <th className="text-center border-2 border-black">Price</th>
              </tr>
            </thead>
            {plList.map((each) => (
              <tbody>
                <tr>
                  <td className="border-2 border-black">{each.BookingID}</td>
                  <td className=" border-2 border-black">
                    {new Date(each.Checkint).toLocaleDateString()}
                  </td>
                  <td className=" border-2 border-black">
                    {new Date(each.Checkout).toLocaleDateString()}
                  </td>
                  <td className=" border-2 border-black">{each.ethAddress}</td>
                  <td className="border-2 border-black">{each.Price}</td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="flex py-2 justify-between">
            <label className="text-2xl font-medium">Total:</label>
            <h2 className="text-2xl pl-80">
              <b>{total.toFixed(4)} </b>
              <button
                onClick={transferMoney}
                className="bg-cyan-500 text-white px-2 mr-2 rounded-md hover:bg-cyan-600"
              >
                Transfer
              </button>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
