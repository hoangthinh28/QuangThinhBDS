// import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { useMoralis } from "react-moralis";
// import { useRouter } from "next/router";

// export default function Profile() {
//   const { Moralis, isInitialized, user } = useMoralis();
//   const router = useRouter();
//   const id = router.query.id;
//   const [rsList, setRsList] = useState();
//   const [pdList, setPdList] = useState([]);
//   const [username, setUsername] = useState("");
//   const [usermail, setMail] = useState("");
//   const { setUserData, isUserUpdating } = useMoralis();
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   useEffect(() => {
//     async function fetchSigleRsList() {
//       const User = Moralis.Object.extend("_User");
//       const query = new Moralis.Query(User);
//       const result = await query.get(id);
//       let rsArray = [];
//       rsArray.push({
//         id: result.id,
//         avaURl: result.attributes.avaURl,
//         username: result.attributes.username,
//         ethAddress: result.attributes.ethAddress,
//         email: result.attributes.email,
//       });
//       setPdList(rsArray);
//       setRsList(result);
//     }
//     if (isInitialized) {
//       fetchSigleRsList();
//     }
//   });

//   return (
//     <div>
//       <div>
//         {pdList.map((each) => {
//           return (
//             <div>
//               <div className="text-center">
//                 <div class="w-full">
//                   <div class="w-full">
//                     <div class=" display: inline-block w-full bg-gray-700">
//                       <img
//                         src={each.avaURl}
//                         alt="profile-pic"
//                         class="rounded-full my-5 mx-auto h-60 w-60"
//                       />
//                       <h1 class="text-5xl text-white font-sans">
//                         {each.username}{" "}
//                       </h1>
//                       <span class="text-4xl text-white mt-7">
//                         {" "}
//                         {each.ethAddress}{" "}
//                       </span>
//                       <div class="text-5xl text-white mt-5 underline">
//                         <p>{each.email}</p>
//                       </div>
//                       <hr className="mt-5"></hr>
//                       <br></br>
//                       <>
//                         <Button
//                           className="scroll-pt-8 text-white text-2xl bg-violet-800"
//                           variant="primary"
//                           onClick={handleShow}
//                         >
//                           Change username and email
//                         </Button>
//                         <Modal
//                           className="text-center bg-gray-700"
//                           show={show}
//                           onHide={handleClose}
//                         >
//                           <div className="text-3xl text-black">
//                             <form
//                               onSubmit={(e) => {
//                                 e.preventDefault();
//                                 if (username.trim() !== "") {
//                                   setUserData({
//                                     username: username,
//                                   }).then(() => setUsername(""));
//                                 }
//                               }}
//                             >
//                               <h1
//                                 className="text-white text-3xl pb-4 pt-3"
//                                 type="text"
//                                 htmlFor="username"
//                                 closeButton
//                               >
//                                 Set a new username
//                               </h1>
//                               <input
//                                 className="scroll-mx-4 scroll-my-4  "
//                                 type="text"
//                                 placeholder="ex.levanquang"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                               ></input>
//                               <button
//                                 className="text-white text-2xl bg-violet-800 rounded-full h-10 w-48"
//                                 onClick={handleClose}
//                                 type="submit"
//                                 colorScheme="purple"
//                                 disabled={isUserUpdating}
//                               >
//                                 {" "}
//                                 Change
//                               </button>
//                             </form>
//                             <form
//                               onSubmit={(e) => {
//                                 e.preventDefault();
//                                 if (usermail.trim() !== "") {
//                                   setUserData({
//                                     email: usermail,
//                                   }).then(() => setUsername("") && setMail(""));
//                                 }
//                               }}
//                             >
//                               <h1
//                                 className="text-white text-3xl pb-4 pt-3"
//                                 type="text"
//                                 htmlFor="email"
//                               >
//                                 Set a new email
//                               </h1>
//                               <input
//                                 id="scroll-mx-4 scroll-my-4 "
//                                 type="text"
//                                 placeholder="ex.quang@gmail.com"
//                                 value={usermail}
//                                 onChange={(e) => setMail(e.target.value)}
//                               ></input>
//                               <button
//                                 className="text-white text-2xl bg-violet-800 rounded-full h-10 w-48 "
//                                 onClick={handleClose}
//                                 type="submit"
//                                 colorScheme="purple"
//                                 disabled={isUserUpdating}
//                               >
//                                 {" "}
//                                 Change
//                               </button>
//                             </form>
//                             <Button
//                               variant="secondary"
//                               className="text-white text-2xl bg-violet-800 rounded-full h-10 w-48"
//                               onClick={handleClose}
//                             >
//                               Close
//                             </Button>
//                           </div>
//                         </Modal>
//                       </>
//                       <hr className="mt-5"></hr>
//                       <div>
//                         <ul className="flex justify-center text-3xl text-white">
//                           <li>
//                             <a href="#">Collection</a>
//                           </li>
//                           <div style={{ width: "300px" }}></div>
//                           <li>
//                             <a href="#">Listing</a>
//                           </li>
//                         </ul>
//                       </div>
//                       <hr className="mt-5"></hr>
//                       <hr className="mt-5"></hr>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
