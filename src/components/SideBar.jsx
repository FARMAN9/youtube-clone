import React from "react";
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";
import { IoIosArrowForward } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { RiHistoryFill } from "react-icons/ri";
import { CgPlayList } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import Avatar from "react-avatar";

const sidebarItem = [
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
];
const sidebarItem2 = [
  {
    icons: <ImProfile size="24px" />,
    title: "Your Channel",
  },
  {
    icons: <RiHistoryFill size="24px" />,
    title: "History",
  },
  {
    icons: <CgPlayList size="24px" />,
    title: "PlayLists",
  },
  {
    icons: <RiVideoLine size="24px" />,
    title: "Your Videos",
  },
  {
    icons: <MdOutlineWatchLater size="24px" />,
    title: "Watch Later",
  },
  {
    icons: <AiOutlineLike size="24px" />,
    title: "Liked Videos",
  },
];
const sidebarItem3 = [
  {
    icons: (
      <Avatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        size={35}
        round={true}
      />
    ),
    title: "TRT world",
  },
  {
    icons: (
      <Avatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        size={35}
        round={true}
      />
    ),
    title: "BBC world",
  },
  {
    icons: (
      <Avatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        size={35}
        round={true}
      />
    ),
    title: "NDTV ",
  },
  {
    icons: (
      <Avatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        size={35}
        round={true}
      />
    ),
    title: "ABC",
  },
  {
    icons: (
      <Avatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        size={35}
        round={true}
      />
    ),
    title: "Random",
  },
  {
    icons: (
      <Avatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        size={35}
        round={true}
      />
    ),
    title: "Data world",
  },
  {
    icons: (
      <Avatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        size={35}
        round={true}
      />
    ),
    title: "Java world",
  },
  {
    icons: (
      <Avatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        size={35}
        round={true}
      />
    ),
    title: "React world",
  },
  {
    icons: (
      <Avatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        size={35}
        round={true}
      />
    ),
    title: "c++",
  },
];

export default function SideBar() {
  const open = useSelector((store) => store.app.toggle);
  console.log(open);
  return (
    <div
      className={`relative left-0 ${
        open ? "w-[15%]" : "w-[6%]"
      } p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}>
      {sidebarItem.map((item, index) => (
        <div key={index} className="flex my-3 ml-2">
          {item.icons}
          <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
        </div>
      ))}
      <hr />
      <div className="font-bold text-lg flex my-2 justify-start items-center  ">
        <p className={`ml-5 ${open ? "" : "hidden"}`}>YOU</p>
        <IoIosArrowForward />
      </div>
      {sidebarItem2.map((item, index) => (
        <div key={index} className="flex my-3 ml-2">
          {item.icons}
          <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
        </div>
      ))}
      <hr />
      <div className="font-bold text-lg flex my-2 justify-start items-center  ">
        <p className={`ml-5 ${open ? "" : "hidden"}`}>Subscriptions</p>
      </div>
      {sidebarItem3.map((item, index) => (
        <div key={index} className="flex my-3 ml-2">
          {item.icons}
          <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
