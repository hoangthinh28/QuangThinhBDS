import React, { useState } from "react";
import Select from "react-select";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faLocationPin,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Header() {
  const bgImg =
    "https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/263238962_424548739135623_3860706508211055556_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=OQ6yG_2-PvEAX_EQiPt&_nc_ht=scontent.fdad1-3.fna&oh=03_AVLgvWdTMG949ey01In-8mYfAYK7l-reKfJlaYQyz4L0kg&oe=62ED3810";

  const locationOption = [
    { value: "danang", label: "Da Nang" },
    { value: "hanoi", label: "Ha Noi" },
    { value: "hochiminh", label: "Ho Chi Minh" },
    { value: "cantho", label: "Can Tho" },
    { value: "hue", label: "Hue" },
  ];

  const apartmentOption = [
    { value: "1bedroomdeluxe", label: "1 bedroom deluxe" },
    { value: "2bedroomdeluxe", label: "2 bedroom deluxe" },
    { value: "1bedroomstandard", label: "1 bedroom standard" },
    { value: "2bedroomstandard", label: "2 bedroom standard" },
  ];

  const [openDate, setOpenDate] = useState(false);

  const [openOption, setOpenOption] = useState(false);

  const [option, setOption] = useState({
    adult: 1,
    room: 1,
    toilet: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  return (
    <div
      className="text-white flex justify-center bg-opacity-90"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-full mt-24 my-0 mb-10">
        <div className="h-30 bg-black border-solid rounded-lg items-center justify-around m-20 bg-opacity-40">
          <div className="flex mt-2 py-6">
            <div className="px-5 flex items-center gap-4">
              <div>
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="text-gray pr-2.5"
                />
                <span className="cursor-pointer">Location</span>
              </div>
              <Select
                defaultValue={[locationOption[0]]}
                isMulti
                name="location"
                options={locationOption}
                classNamePrefix="select"
                className="text-black z-30"
                placeholder="Select location..."
              />
            </div>
            <div className="px-5 flex items-center gap-4">
              <div>
                <FontAwesomeIcon icon={faBed} className="text-gray pr-2.5" />
                <span className="cursor-pointer">Apartment</span>
              </div>
              <Select
                defaultValue={[apartmentOption[0]]}
                isMulti
                name="apartment"
                options={apartmentOption}
                classNamePrefix="select"
                className="text-black z-30"
                placeholder="Select apartment..."
              />
            </div>
            <div className="px-5 flex items-center gap-4">
              <div>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-gray pr-2.5"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="cursor-pointer"
                >{`${[format(date[0].startDate, "dd/MM/yyyy")]} to ${[
                  format(date[0].endDate, "dd/MM/yyyy"),
                ]}`}</span>
              </div>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="absolute top-80  z-30"
                />
              )}
            </div>
            <div className="px-5 flex items-center gap-4">
              <FontAwesomeIcon icon={faPerson} className="text-gray pr-2.5 " />
              <span
                onClick={() => {
                  setOpenOption(!openOption);
                }}
                className="cursor-pointer"
              >{`${option.adult} adult - ${option.room} room - ${option.toilet} toilet`}</span>
              <style jsx>{`
                .countButton:disabled {
                  cursor: not-allowed;
                }
              `}</style>
              {openOption && (
                <div className="absolute top-80 bg-white text-black shadow-[0_0px_10px_-5px_rgba(0,0,0,0.4)] z-30">
                  <div className="w-40 flex justify-between m-10">
                    <span className="pr-2">Adult</span>
                    <div className="flex items-center gap-8 text-black">
                      <button
                        className="w-6 h-30 border border-sky-500 cursor-pointer countButton"
                        onClick={() => {
                          handleOption("adult", "d");
                        }}
                        disabled={option.adult <= 1}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {option.adult}
                      </span>
                      <button
                        className="w-6 h-30 border border-sky-500 cursor-pointer countButton"
                        onClick={() => {
                          handleOption("adult", "i");
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between m-10">
                    <span className="pr-2">Room</span>
                    <div className="flex items-center gap-8 text-black">
                      <button
                        className="w-6 h-30 border border-sky-500 cursor-pointer countButton"
                        onClick={() => {
                          handleOption("room", "d");
                        }}
                        disabled={option.room <= 1}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">{option.room}</span>
                      <button
                        className="w-6 h-30 border border-sky-500 cursor-pointer countButton"
                        onClick={() => {
                          handleOption("room", "i");
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between m-10">
                    <span className="pr-2">Toilet</span>
                    <div className="flex items-center gap-8 text-black">
                      <button
                        className="w-6 h-30 border border-sky-500 cursor-pointer countButton"
                        onClick={() => {
                          handleOption("toilet", "d");
                        }}
                        disabled={option.toilet <= 1}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {option.toilet}
                      </span>
                      <button
                        className="w-6 h-30 border border-sky-500 cursor-pointer countButton"
                        onClick={() => {
                          handleOption("toilet", "i");
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="px-5 flex items-center gap-4">
              <button
                className="p-3 bg-cyan-500 rounded hover:bg-cyan-600"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
