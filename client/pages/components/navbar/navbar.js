import { useState } from "react";
import WalletCard from "../wallet/WalletCard";
import { useMoralis } from "react-moralis";
import Link from "next/link";

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
  const { isAuthenticated, logout, user } = useMoralis();

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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/realestate">Real Estate</NavLink>
          <NavLink to="/team">My Team</NavLink>
          <NavLink to="/whitepaper1">White paper 1.1</NavLink>
          {isAuthenticated ? (
            <div className="">
              {user.get("isAdmin") && (
                <NavLink to="/mint-realestate">Mint</NavLink>
              )}
              <Link href="/profile/[id]" as={`/profile/${user.id}`}>
                {trimPublicAddress(user.get("ethAddress"), 5)}
              </Link>

              <button
                className="ml-2 text-white bg-cyan-500 rounded hover:bg-cyan-600 p-3"
                type="button"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (
            <WalletCard />
          )}
        </div>
      </div>
    </nav>
  );
}
