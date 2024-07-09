import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/appslice";

const buttonList = [
  "All",
  "Javascript",
  "Java",
  "Live",
  "Music",
  "Songs",
  "Vlogs",
  "Trending",
  "Programming",
  "News",
  "Technology",
  "Cricket",
  "Comedy",
  "Thriller",
  "New to you",
  "Computer Programming",
  "Netlify",
  "Coding",
];

function ButtonList() {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();
  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
    console.log(tag);
  };
  return (
    <div className="flex w-full py-4 overflow-x-scroll m-1 no-scrollbar ">
      {buttonList.map((buttonText, index) => (
        <div key={index}>
          <button
            onClick={() => {
              videoByTag(buttonText);
            }}
            key={index}
            className={`${
              active === buttonText ? "bg-slate-900 text-white" : "bg-gray-200"
            } w-fit font-medium mx-1 cursor-pointer px-3 py-2 rounded-lg`}>
            <span className="whitespace-nowrap">{buttonText}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ButtonList;
