import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Axios from "axios";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { BookedProduct } from "./components/feature/BookedProduct";
import Product from "./components/feature/Product";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { set } from "date-fns";
import validator from "validator";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  const [userList, setUserList] = useState([]);
  const [pdList, setPdList] = useState([]);
  const [rsList, setRsList] = useState([]);
  const [address, setAddress] = useState([]);
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [userErr, setUserErr] = useState("");
  const [userValid, setUserValid] = useState(false);
  const [imageErr, setImageErr] = useState("");
  const [imageValid, setImageValid] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const validateImage = () => {
    if (image.length < 1) {
      setImageErr("Avatar require!");
      setImageValid(false);
      return;
    }
    if (!validator.isURL(image)) {
      setImageErr("Avatar must be an URL!");
      setImageValid(false);
      return;
    }
    setImageErr("");
    setImageValid(true);
  };
  const validateUser = () => {
    if (user.length < 1) {
      setUserErr("Username require!");
      setUserValid(false);
      return;
    }
    if (user.length > 20) {
      setUserErr("Username too long!");
      setUserValid(false);
      return;
    }
    setUserErr("");
    setUserValid(true);
  };
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const checkEmail = () => {
    if (email.length < 1) {
      setEmailErr("Email require!");
      setEmailValid(false);
      return;
    }
    if (regex.test(email) === false) {
      setEmailErr("Please enter validate email(name@gmail.com)!");
      setEmailValid(false);
      return;
    }
    setEmailErr("");
    setEmailValid(true);
  };

  let dataUpdate = {
    Username: user,
    Email: email,
    Avatar: image,
  };
  const updateDateUser = () => {
    Axios.put(`http://localhost:5000/api/user/id/${address}`, dataUpdate);
  };

  useEffect(() => {
    connect();
    fetchSingleUser();
    fetchBooked();
    fetchCreated();
  }, [address]);

  async function connect() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    setAddress(signerAddress);
  }

  async function fetchSingleUser() {
    let promise = Axios({
      url: `http://localhost:5000/api/user/address/${address}`,
      method: "GET",
    });
    promise
      .then((rs) => {
        setUserList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchBooked() {
    let promise = Axios({
      url: `http://localhost:5000/api/datebooking/date/${address}`,
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

  async function fetchCreated() {
    let promise = Axios({
      url: `http://localhost:5000/api/realEstate/address/${address}`,
      method: "GET",
    });
    promise
      .then((rs) => {
        setRsList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      {userList.map((each) => {
        return (
          <div className="min-h-full d-flex justify-content-center align-items-center ">
            <div className="w-full border-none rounded-2xl p-2 relative bg-white h-full">
              <div className="h-24">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20190220/ourmid/pngtree-business-technology-dark-blue-background-point-line-image_7559.jpg"
                  className="img-fluid  h-52 w-full rounded-t-xl"
                />
              </div>
              <div className=" flex justify-center relative text-center">
                <div className="flex justify-center border-3 border-solid  bg-white top-8 h-48 w-48 rounded-full">
                  <img
                    src={each.Avatar}
                    className="rounded-circle h-48 w-48 mt-0.5 rounded-full"
                    width="80"
                  />
                </div>
              </div>
              <div className=" text-center ">
                <h2 className="pt-3 text-4xl text-black">{each.Username}</h2>

                <span className="pt-2 text-2xl  text-black text-muted d-block mb-2">
                  {each.ethAddress}
                </span>
                <br></br>
                <br></br>

                <div className="flex gap-4 justify-center items-center">
                  <button
                    className="w-44 h-12 rounded-full bg-cyan-500 btn-dark text-center text-white hover:bg-cyan-800"
                    onClick={handleShow}
                  >
                    Edit Profile
                  </button>
                  {each.isAdmin === 1 && (
                    <a href="/admin" target="_blank">
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-gray mr-2 text-2xl hover:text-cyan-500"
                      />
                    </a>
                  )}
                </div>

                <>
                  <Modal
                    className="flex justify-center text-center w-full h-full"
                    show={show}
                    onHide={handleClose}
                  >
                    <div className="flex justify-center text-3xl text-black ">
                      <div
                        id="authentication-modal"
                        tabindex="-1"
                        aria-hidden="true"
                        className="overflow-y-auto fixed pt-36 ml-20 pl-96 w-full md:inset-0 h-modal md:h-full "
                      >
                        <div className="relative p-px w-full max-w-md h-full md:h-auto  bg-black">
                          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button
                              type="button"
                              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                              data-modal-toggle="authentication-modal"
                              onClick={handleClose}
                            >
                              <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="sr-only">Close modal</span>
                            </button>
                            <div className="py-6 px-6 lg:px-8">
                              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                Update Profile
                              </h3>
                              <hr className="w-full"></hr>
                              <Form>
                                <div>
                                  <label
                                    for="username"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Set a new username
                                  </label>
                                  <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter username"
                                    onChange={(e) => {
                                      setUser(e.target.value);
                                      validateUser;
                                    }}
                                    onBlur={validateUser}
                                    required
                                  />
                                  {userErr && (
                                    <div
                                      className="validation text-red-700 text-base -mt-0"
                                      style={{ display: "block" }}
                                    >
                                      *{userErr}
                                    </div>
                                  )}
                                </div>
                                <div>
                                  <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Set a new email
                                  </label>
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter email"
                                    onChange={(e) => {
                                      setEmail(e.target.value);
                                      checkEmail;
                                    }}
                                    onBlur={checkEmail}
                                    required
                                  />
                                  {emailErr && (
                                    <div
                                      className="validation text-red-700 text-base -mt-0"
                                      style={{ display: "block" }}
                                    >
                                      *{emailErr}
                                    </div>
                                  )}
                                </div>
                                <div>
                                  <label
                                    for="username"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Set a Avatar
                                  </label>
                                  <input
                                    type="text"
                                    name="image"
                                    id="image"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter image"
                                    onChange={(e) => {
                                      setImage(e.target.value);
                                      validateImage;
                                    }}
                                    onBlur={validateImage}
                                    required
                                  />
                                  {imageErr && (
                                    <div
                                      className="validation text-red-700 text-base -mt-0"
                                      style={{ display: "block" }}
                                    >
                                      *{imageErr}
                                    </div>
                                  )}
                                </div>
                                <hr className="p-5"></hr>
                                <button
                                  className="text-white text-2xl bg-cyan-500 rounded h-10 w-48"
                                  onClick={updateDateUser}
                                  type="submit"
                                  colorScheme="purple"
                                  // onClick={submit}
                                >
                                  {" "}
                                  Change
                                </button>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </>
              </div>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box
                    className="flex justify-center pt-5"
                    sx={{ borderBottom: 1, borderColor: "divider" }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="Booked" value="1" />
                      <Tab label="Created" value="2" />
                      {/* <Tab label="Item Three" value="3" /> */}
                    </TabList>
                  </Box>
                  <TabPanel className="" value="1">
                    {pdList === [] ? (
                      <h1>No product booked!</h1>
                    ) : (
                      <BookedProduct data={pdList} />
                    )}
                  </TabPanel>
                  <TabPanel className="grid grid-cols-3 gap-5" value="2">
                    {rsList === [] ? (
                      <h1>No product created!</h1>
                    ) : (
                      rsList.map((each) => {
                        return (
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
                        );
                      })
                    )}
                  </TabPanel>
                  {/* <TabPanel className="flex justify-center text-center" value="3">Item Three</TabPanel> */}
                </TabContext>
              </Box>
            </div>
          </div>
        );
      })}
    </div>
  );
}
