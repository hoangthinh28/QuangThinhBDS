import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useRouter } from "next/router";
import axios from "axios";
import QTMarket from "../../artifacts/contracts/QTMarket.sol/QTMarket.json";
import NFT from "../../artifacts/contracts/NFT.sol/NFT.json";
import { nftaddress, nftmarketaddress } from "../../config";
import validator from "validator";

export default function MintRealEstate() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [price, setPrice] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [toilet, setToiet] = useState("");
  const [bedRoom, setBedroom] = useState("");
  const [direct, setDirect] = useState("");
  const [people, setPeople] = useState("");
  const [detail, setDetail] = useState("");
  const [addressUser, setAddressUser] = useState([]);
  const [titleErr, setTitleErr] = useState("");
  const [buildingErr, setBuildingErr] = useState("");
  const [floorErr, setFloorErr] = useState("");
  const [priceErr, setPriceErr] = useState("");
  const [roomCodeErr, setRoomCodeErr] = useState("");
  const [locationErr, setLocationErr] = useState("");
  const [addErr, setAddErr] = useState("");
  const [imgErr, setImgErr] = useState("");
  const [areaErr, setAreaErr] = useState("");
  const [toiletErr, setToiletErr] = useState("");
  const [bedRoomErr, setBedRoomErr] = useState("");
  const [directErr, setDirectErr] = useState("");
  const [detailErr, setDetailErr] = useState("");
  const [peopleErr, setPeopleErr] = useState("");
  const [titleValid, setTitleValid] = useState(false);
  const [buildingValid, setBuildingValid] = useState(false);
  const [floorValid, setFloorValid] = useState(false);
  const [priceValid, setPriceValid] = useState(false);
  const [roomCodeValid, setRoomCodeValid] = useState(false);
  const [locationValid, setLocationValid] = useState(false);
  const [addValid, setAddValid] = useState(false);
  const [imgValid, setImgValid] = useState(false);
  const [areaValid, setAreaValid] = useState(false);
  const [toiletValid, setToiletValid] = useState(false);
  const [bedRoomValid, setBedRoomValid] = useState(false);
  const [directValid, setDirectValid] = useState(false);
  const [detailValid, setDetailValid] = useState(false);
  const [peopleValid, setPeopleValid] = useState(false);

  useEffect(() => {
    connect();
  });

  const validateTitle = () => {
    if (title.length < 1) {
      setTitleErr("Title require!");
      setTitleValid(false);
      return;
    }
    if (title.length > 200) {
      setTitleErr("Title too long!");
      setTitleValid(false);
      return;
    }
    setTitleErr("");
    setTitleValid(true);
  };
  const validateBuilding = () => {
    if (building.length < 1) {
      setBuildingErr("Building require!");
      setBuildingValid(false);
      return;
    }
    if (building.length > 200) {
      setBuildingErr("Building too long!");
      setBuildingValid(false);
      return;
    }
    setBuildingErr("");
    setBuildingValid(true);
  };
  const validateFloor = () => {
    if (floor.length < 1) {
      setFloorErr("Floor require!");
      setFloorValid(false);
      return;
    }
    if (!validator.isNumeric(floor)) {
      setFloorErr("Floor must be numeric!");
      setFloorValid(false);
      return;
    }
    if (Number(floor) <= 0) {
      setFloorErr("Floor must be greater than zero!");
      setFloorValid(false);
      return;
    }
    setFloorErr("");
    setFloorValid(true);
  };
  const validatePrice = () => {
    if (price.length < 1) {
      setPriceErr("Price require!");
      setPriceValid(false);
      return;
    }
    if (!validator.isNumeric(price)) {
      setPriceErr("Price must be numeric!");
      setPriceValid(false);
      return;
    }
    if (Number(price) <= 0) {
      setPriceErr("Price must be greater than zero!");
      setPriceValid(false);
      return;
    }
    setPriceErr("");
    setPriceValid(true);
  };
  const validateRoomCode = () => {
    if (roomCode.length < 1) {
      setRoomCodeErr("RoomCode require!");
      setRoomCodeValid(false);
      return;
    }
    if (roomCode.length > 200) {
      setRoomCodeErr("RoomCode too long!");
      setRoomCodeValid(false);
      return;
    }
    setRoomCodeErr("");
    setRoomCodeValid(true);
  };
  const validateLocation = () => {
    if (location.length < 1) {
      setLocationErr("Location require!");
      setLocationValid(false);
      return;
    }
    if (location.length > 200) {
      setLocationErr("Location too long!");
      setLocationValid(false);
      return;
    }
    setLocationErr("");
    setLocationValid(true);
  };
  const validateAdd = () => {
    if (address.length < 1) {
      setAddErr("Address require!");
      setAddValid(false);
      return;
    }
    if (address.length > 200) {
      setAddErr("Address too long!");
      setAddValid(false);
      return;
    }
    setAddErr("");
    setAddValid(true);
  };

  const validateImg = () => {
    if (img.length < 1) {
      setImgErr("Image require!");
      setImgValid(false);
      return;
    }
    if (!validator.isURL(img)) {
      setImgErr("Image must be an URL!");
      setImgValid(false);
      return;
    }
    setImgErr("");
    setImgValid(true);
  };
  const validateArea = () => {
    if (area.length < 1) {
      setAreaErr("Area require!");
      setAreaValid(false);
      return;
    }
    if (!validator.isNumeric(area)) {
      setAreaErr("Area must be numeric!");
      setAreaValid(false);
      return;
    }
    if (Number(area) <= 0) {
      setAreaErr("Area must be greater than zero!");
      setAreaValid(false);
      return;
    }
    setAreaErr("");
    setAreaValid(true);
  };
  const validateToilet = () => {
    if (toilet.length < 1) {
      setToiletErr("Toilet require!");
      setToiletValid(false);
      return;
    }
    if (!validator.isNumeric(toilet)) {
      setToiletErr("Toilet must be numeric!");
      setToiletValid(false);
      return;
    }
    if (Number(toilet) <= 0) {
      setToiletErr("Toilet must be greater than zero!");
      setToiletValid(false);
      return;
    }
    setToiletErr("");
    setToiletValid(true);
  };
  const validateBedRoom = () => {
    if (bedRoom.length < 1) {
      setBedRoomErr("BedRoom require!");
      setBedRoomValid(false);
      return;
    }
    if (!validator.isNumeric(bedRoom)) {
      setBedRoomErr("BedRoom must be numeric!");
      setBedRoomValid(false);
      return;
    }
    if (Number(bedRoom) <= 0) {
      setBedRoomErr("BedRoom must be greater than zero!");
      setBedRoomValid(false);
      return;
    }
    setBedRoomErr("");
    setBedRoomValid(true);
  };
  const validateDirect = () => {
    if (direct.length < 1) {
      setDirectErr("Direct require!");
      setDirectValid(false);
      return;
    }
    if (direct.length > 200) {
      setDirectErr("Direct too long!");
      setDirectValid(false);
      return;
    }
    setDirectErr("");
    setDirectValid(true);
  };
  const validateDetail = () => {
    if (detail.length < 1) {
      setDetailErr("Detail require!");
      setDetailValid(false);
      return;
    }
    if (detail.length > 2000) {
      setDetailErr("Detail too long!");
      setDetailValid(false);
      return;
    }
    setDetailErr("");
    setDetailValid(true);
  };
  const validatePeople = () => {
    if (people.length < 1) {
      setPeopleErr("People require!");
      setPeopleValid(false);
      return;
    }
    if (!validator.isNumeric(people)) {
      setPeopleErr("People must be numeric!");
      setPeopleValid(false);
      return;
    }
    if (Number(people) <= 0) {
      setPeopleErr("People must be greater than zero!");
      setPeopleValid(false);
      return;
    }
    setPeopleErr("");
    setPeopleValid(true);
  };
  async function connect() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    setAddressUser(signerAddress);
  }

  let data = {
    Title: title,
    RoomCode: roomCode,
    Price: price,
    Location: location,
    Address: address,
    Direct: direct,
    Floor: floor,
    MaxRoom: bedRoom,
    imgURL: img,
    Area: area,
    Toilet: toilet,
    People: people,
    Detail: detail,
    Building: building,
    ethAddress: addressUser,
  };

  async function createSale(url) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
    let transaction = await contract.mintToken(url);
    let tx = await transaction.wait();
    console.log(tx);
    let event = tx.events[0];
    let value = event.args[2];
    let tokenId = value.toNumber();
    const pricePerDay = ethers.utils.parseUnits(price.toString(), "ether");

    contract = new ethers.Contract(nftmarketaddress, QTMarket.abi, signer);
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();

    transaction = await contract.makeMarketItem(
      nftaddress,
      tokenId,
      pricePerDay,
      [],
      { value: listingPrice }
    );
    await transaction.wait();
    router.push("/");
  }

  const createData = () => {
    const url = axios.post(`http://localhost:5000/api/realEstate/`, data);
    createSale(url);
  };

  return (
    <div className="mt-5 w-3/5 m-auto">
      <style jsx>{`
        input[type="text"],
        input[type="password"],
        input[type="number"],
        input[type="date"],
        input[type="email"] {
          width: 100%;
          padding: 15px;
          margin: 5px 0 22px 0;
          display: inline-block;
          border: none;
          background: #f1f1f1;
        }

        input[type="text"]:focus,
        input[type="password"]:focus,
        input[type="number"]:focus,
        input[type="date"]:focus,
        input[type="email"]:focus {
          background-color: #ddd;
          outline: none;
        }

        hr {
          border: 1px solid #f1f1f1;
          margin-bottom: 25px;
        }

        .registerbtn {
          background-color: #04aa6d;
          color: white;
          padding: 16px 20px;
          margin: 8px 0;
          border: none;
          cursor: pointer;
          width: 100%;
          opacity: 0.9;
        }

        .registerbtn:hover {
          opacity: 1;
        }

        a {
          color: dodgerblue;
        }

        .signin {
          background-color: #f1f1f1;
          text-align: center;
        }
        hr {
          border: 1px solid #f1f1f1;
          margin-bottom: 25px;
        }
      `}</style>
      <h1 className="text-3xl font-bold font-serif text-center mb-2">
        Mint Real Estate
      </h1>
      <p className="text-center mb-3 font-serif">
        Please fill in this form to mint real estate.
      </p>
      <hr />

      <label for="title">
        <b>Title</b>
      </label>
      <input
        type="text"
        placeholder="Enter Title"
        name="email"
        id="email"
        onChange={(e) => {
          setTitle(e.target.value);
          validateTitle;
        }}
        onBlur={validateTitle}
        required
      />
      {titleErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{titleErr}
        </div>
      )}

      <label for="building">
        <b>Building</b>
      </label>
      <input
        type="text"
        placeholder="Enter Building"
        name="building"
        id="building"
        onChange={(e) => {
          setBuilding(e.target.value);
          validateBuilding;
        }}
        onBlur={validateBuilding}
        required
      />
      {buildingErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{buildingErr}
        </div>
      )}

      <label for="floor">
        <b>Floor</b>
      </label>
      <input
        type="text"
        placeholder="Enter Floor"
        name="floor"
        id="floor"
        onChange={(e) => {
          setFloor(e.target.value);
          validateFloor;
        }}
        onBlur={validateFloor}
        required
      />
      {floorErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{floorErr}
        </div>
      )}

      <label for="price">
        <b>Price</b>
      </label>
      <input
        type="text"
        placeholder="Enter Price"
        name="price"
        id="price"
        onChange={(e) => {
          setPrice(e.target.value);
          validatePrice;
        }}
        onBlur={validatePrice}
        required
      />
      {priceErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{priceErr}
        </div>
      )}

      <label for="roomCode">
        <b>Room Code</b>
      </label>
      <input
        type="text"
        placeholder="Enter Room Code"
        name="roomCode"
        id="roomCode"
        onChange={(e) => {
          setRoomCode(e.target.value);
          validateRoomCode;
        }}
        onBlur={validateRoomCode}
        required
      />
      {roomCodeErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{roomCodeErr}
        </div>
      )}

      <label for="location">
        <b>Location</b>
      </label>
      <input
        type="text"
        placeholder="Enter Location"
        name="location"
        id="location"
        onChange={(e) => {
          setLocation(e.target.value);
          validateLocation;
        }}
        onBlur={validateLocation}
        required
      />
      {locationErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{locationErr}
        </div>
      )}

      <label for="address">
        <b>Address</b>
      </label>
      <input
        type="text"
        placeholder="Enter Address"
        name="address"
        id="address"
        onChange={(e) => {
          setAddress(e.target.value);
          validateAdd;
        }}
        onBlur={validateAdd}
        required
      />
      {addErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{addErr}
        </div>
      )}

      <label for="imgUrl">
        <b>Image URL</b>
      </label>
      <input
        type="text"
        placeholder="Enter Image URL"
        name="imgURL"
        id="imgURL"
        onChange={(e) => {
          setImg(e.target.value);
          validateImg;
        }}
        onBlur={validateImg}
        required
      />
      {imgErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{imgErr}
        </div>
      )}

      <label for="area">
        <b>Area</b>
      </label>
      <input
        type="text"
        placeholder="Enter Area"
        name="area"
        id="area"
        onChange={(e) => {
          setArea(e.target.value);
          validateArea;
        }}
        onBlur={validateArea}
        required
      />
      {areaErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{areaErr}
        </div>
      )}

      <label for="toilet">
        <b>Toilet</b>
      </label>
      <input
        type="text"
        placeholder="Enter Toilet"
        name="toilet"
        id="toilet"
        onChange={(e) => {
          setToiet(e.target.value);
          validateToilet;
        }}
        onBlur={validateToilet}
        required
      />
      {toiletErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{toiletErr}
        </div>
      )}

      <label for="bedroom">
        <b>Bedroom</b>
      </label>
      <input
        type="text"
        placeholder="Enter Bedroom"
        name="bedroom"
        id="bedroom"
        onChange={(e) => {
          setBedroom(e.target.value);
          validateBedRoom;
        }}
        onBlur={validateBedRoom}
        required
      />
      {bedRoomErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{bedRoomErr}
        </div>
      )}

      <label for="direct">
        <b>Direct</b>
      </label>
      <input
        type="text"
        placeholder="Enter Direct"
        name="direct"
        id="direct"
        onChange={(e) => {
          setDirect(e.target.value);
          validateDirect;
        }}
        onBlur={validateDirect}
        required
      />
      {directErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{directErr}
        </div>
      )}

      <label for="detail">
        <b>Detail</b>
      </label>
      <textarea
        name="detail"
        id="detail"
        onChange={(e) => {
          setDetail(e.target.value);
          validateDetail;
        }}
        onBlur={validateDetail}
        cols="30"
        rows="10"
        className="w-full bg-gray-100"
        placeholder="   Enter Detail"
        required
      ></textarea>
      {detailErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{detailErr}
        </div>
      )}
      <label for="direct">
        <b>People</b>
      </label>
      <input
        type="number"
        placeholder="Enter People"
        name="people"
        id="direct"
        min={1}
        onChange={(e) => {
          setPeople(e.target.value);
          validatePeople;
        }}
        onBlur={validatePeople}
        required
      />
      {peopleErr && (
        <div
          className="validation text-red-700 -mt-3"
          style={{ display: "block" }}
        >
          *{peopleErr}
        </div>
      )}

      <hr></hr>
      <button
        type="submit"
        className=" py-4 px-5 border-none bg-green-400 w-full opacity-90 my-4 mx-0 cursor-pointer hover:opacity-100 text-white text-xl"
        onClick={createData}
      >
        Mint
      </button>
    </div>
  );
}
