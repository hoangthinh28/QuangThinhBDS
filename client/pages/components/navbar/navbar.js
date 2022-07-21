import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Axios from "axios";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          <img
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/291066879_566298341562010_5380988004756892022_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=NNtckKBNgo4AX9jdOZD&tn=FgQ66fVBgubasBJ_&_nc_ht=scontent.fdad2-1.fna&oh=03_AVL_Sj0eSzVT7C7BfUwnNujki0u6oA-GWBPHMg8Zl6FzJw&oe=62EB350D"
            alt=""
            className="h-20"
          />
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/home"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/realestate"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Real Estate
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/team"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          My Team
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/whitepaper1"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          White paper 1.1
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/login"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Login
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/register"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Register
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [address, setAddress] = useState([]);
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    connect();
  }, []);
  async function login(address) {
    let promise = Axios({
      url: "http://localhost:5000/api/user/",
      method: "POST",
      data: { ethAddress: address },
    });
    promise
      .then((result) => {
        console.log(result.data);
        // console.log(this.state.taskId);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    setLogin(true);
  }
  async function connect() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    login(signerAddress);
    console.log(signerAddress);
    setAddress(signerAddress);
  }

  const trimPublicAddress = (string, numberOfCharacter) => {
    return `${string.slice(0, numberOfCharacter)}...${string.slice(
      string.length - numberOfCharacter,
      string.length
    )}`;
  };

  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center z-50 w-full">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <a className="w-20" href="/">
          <img
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/291066879_566298341562010_5380988004756892022_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=NNtckKBNgo4AX9jdOZD&tn=FgQ66fVBgubasBJ_&_nc_ht=scontent.fdad2-1.fna&oh=03_AVL_Sj0eSzVT7C7BfUwnNujki0u6oA-GWBPHMg8Zl6FzJw&oe=62EB350D"
            alt=""
          />
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex items-center justify-center ">
          <div
            className={
              router.pathname == "/" ? "border-b-4 border-red-500" : ""
            }
          >
            <NavLink to="/">Home</NavLink>
          </div>
          <div
            className={
              router.pathname == "/realestate"
                ? "border-b-4 border-red-500"
                : ""
            }
          >
            <NavLink to="/realestate">Real Estate</NavLink>
          </div>
          <div
            className={
              router.pathname == "/team" ? "border-b-4 border-red-500" : ""
            }
          >
            <NavLink to="/team">My Team</NavLink>
          </div>
          <div
            className={
              router.pathname == "/whitepaper1"
                ? "border-b-4 border-red-500"
                : ""
            }
          >
            {" "}
            <NavLink to="/whitepaper1">White paper 1.1</NavLink>
          </div>
          {isLogin ? (
            <div className="flex">
              <div
                className={
                  router.pathname == "/mint-realestate"
                    ? "border-b-4 border-red-500 pt-2"
                    : "pt-2"
                }
              >
                <NavLink to="/mint-realestate">Mint</NavLink>
              </div>
              <span className="px-4 py-2  text-base rounded-full text-white  bg-gray-600 ">
                {trimPublicAddress(address, 6)}
              </span>
            </div>
          ) : (
            <button
              onClick={connect}
              type="button"
              className=""
              id="options-menu"
            >
              Connect
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
