import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import React, { useState, useEffect } from "react";
import Axios from "axios";

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import QTMarket from "../../artifacts/contracts/QTMarket.sol/QTMarket.json";
import NFT from "../../artifacts/contracts/NFT.sol/NFT.json";
import { nftaddress, nftmarketaddress } from "../../config";
import { formatUnits } from "ethers/lib/utils";

import { useRouter } from "next/router";

const Widget = ({ type }) => {
  const router = useRouter();

  const [pbList, setPbList] = useState([]);
  const [plList, setPlList] = useState([]);
  const [bkList, setBkList] = useState([]);

  const [balance, setBalance] = useState("");

  useEffect(() => {
    if (router.isReady) {
      fetchSigleRsList();
      fetchSigleReList();
      fetchSigleBookingList();
      getBalance();
    }
  }, [router.isReady]);
  async function fetchSigleReList() {
    let promise = Axios({
      url: `http://localhost:5000/api/user/`,
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
  async function fetchSigleRsList() {
    let promise = Axios({
      url: `http://localhost:5000/api/realEstate/`,
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
  let data;
  async function fetchSigleBookingList() {
    let promise = Axios({
      url: `http://localhost:5000/api/datebooking/`,
      method: "GET",
    });
    promise
      .then((rs) => {
        setBkList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  let total = 0;
  bkList.map((each) => {
    total += each.Price;
    return total;
  });

  async function getBalance() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      nftmarketaddress,
      QTMarket.abi,
      signer
    );

    const balance = await contract.getBalance();
    setBalance(formatUnits(balance.toString()));
  }

  async function widthrawBalance() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      nftmarketaddress,
      QTMarket.abi,
      signer
    );

    // const price = ethers.utils.parseEther(balance.toString());
    const transaction = await contract.withdrawMoneyTo(nftmarketaddress);
    await transaction.wait();
    router.reload();
  }

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="h-10 w-10 rounded"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        amount: pbList.length,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "",
        icon: (
          <MonetizationOnOutlinedIcon
            className="h-10 w-10 rounded"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        isButton: true,
        amount: balance,
      };
      break;
    case "real":
      data = {
        title: "REAL ESTATE",
        isMoney: false,
        link: "View all real estate",
        icon: (
          <ShoppingCartOutlinedIcon
            className="h-10 w-10 rounded"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
        amount: plList.length,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="h-10 w-10 rounded"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        amount: total.toFixed(4),
      };
      break;
    default:
      break;
  }
  return (
    <div className=" text-white flex justify-between flex-1 rounded h-44 w-80 bg-black box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47); pl-1 pr-1 pb-1 -mt-96  ">
      <div className="flex flex-col justify-between h-44 w-full ">
        <span className="font-bold text-sm text-zinc-400">{data.title}</span>
        <span className="text-3xl font-light">
          {data.amount} {data.isMoney && "ETH"}
        </span>
        <span className="w-max text-xs border-b text-white m-1">
          {data.link}
        </span>
        {data.isButton && (
          <span className="w-2/5 text-xs text-center rounded-sm bg-cyan-500 text-white m-1">
            <button onClick={widthrawBalance}>Withdraw</button>
          </span>
        )}
      </div>
      <div className="flex flex-col justify-between">
        <div className="percentage positive text-white"></div>
        {data.icon}
      </div>
    </div>
  );
};
export default Widget;
