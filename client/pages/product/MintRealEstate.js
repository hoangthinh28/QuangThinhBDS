import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

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

  const { Moralis, isInitialized } = useMoralis();

  const createNewProduct = (
    title,
    building,
    floor,
    price,
    roomCode,
    location,
    img,
    address,
    area,
    toilet,
    bedroom,
    direct,
    detail,
    people
  ) => {
    const newRealEstate = Moralis.Object.extend("RealEstate");
    const realEstate = new newRealEstate();
    realEstate.set("roomCode", roomCode);
    realEstate.set("price", price);
    realEstate.set("floor", floor);
    realEstate.set("imgURL", img);
    realEstate.set("area", area);
    realEstate.set("toilet", toilet);
    realEstate.set("building", building);
    realEstate.set("address", address);
    realEstate.set("location", location);
    realEstate.set("title", title);
    realEstate.set("bedRoom", bedroom);
    realEstate.set("direct", direct);
    realEstate.set("detail", detail);
    realEstate.set("people", people);
    realEstate.set("user", Moralis.User.current());
    realEstate.save();
    router.push("/");
    console.log(realEstate);
    return realEstate;
  };

  return (
    <div className="mt-5">
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
        }}
        required
      />
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
        }}
        required
      />
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
        }}
        required
      />
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
        }}
        required
      />
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
        }}
        required
      />
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
        }}
        required
      />
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
        }}
        required
      />
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
        }}
        required
      />
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
        }}
        required
      />
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
        }}
        required
      />
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
        }}
        required
      />
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
        }}
        required
      />
      <label for="detail">
        <b>Detail</b>
      </label>
      <textarea
        name="detail"
        id="detail"
        onChange={(e) => {
          setDetail(e.target.value);
        }}
        cols="30"
        rows="10"
        className="w-full bg-gray-300"
        placeholder="   Enter Detail"
        required
      ></textarea>
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
        }}
        required
      />
      <hr></hr>
      <button
        type="submit"
        class=" py-4 px-5 border-none bg-green-400 w-full opacity-90 my-4 mx-0 cursor-pointer hover:opacity-100 text-white text-xl"
        onClick={() => {
          createNewProduct(
            title,
            building,
            floor,
            price,
            roomCode,
            location,
            img,
            address,
            area,
            toilet,
            bedRoom,
            direct,
            detail,
            Number(people)
          );
        }}
      >
        Mint
      </button>
    </div>
  );
}
