import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";

import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuitems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div>
      <div className=" grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8 px-4">
          <div className=" text-3xl h-fit w-fit hover:bg-gray-600 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitter />
          </div>

          <div className="mt-4 text-2xl pr-4">
            <ul>
              {SidebarMenuitems.map((item) => (
                <li
                  className=" flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2 transition-all"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3 font-semibold">
              <button className=" bg-[#1d9bf0] text-lg p-4 rounded-full w-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className=" col-span-5 border-r-[1px] h-screen overflow-scroll border-l-[1px] border-white">
          <FeedCard />
        </div>
        <div className=" col-span-2"></div>
      </div>
    </div>
  );
}
