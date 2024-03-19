import Image from "next/image";
import React from "react";
import { Heart, MessageSquare, Eye, Share2 } from "lucide-react";
const DiscussionForumCard = ({
  avatar,
  fname,
  lname,
  sector,
  userInput,
  timePosted,
  numOfLikes,
  numOfViews,
  numOfComments,
}) => {
  return (
    <div className="flex flex-col gap-y-3 w-full p-3 shadow-br  my-6 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2 sm:gap-x-6">
          <Image
            src={avatar}
            width={80}
            height={80}
            alt={lname}
            className="rounded-[100%] bg-gray-400 animate-pulse w-[50px] h-[50px]"
          />
          <span className='text-sm sm:text-base'>
            {fname} {lname}
          </span>
          <span className="text-sm text-white bg-blue-900 px-2 py-1 sm:px-4 sm:py-1 rounded-2xl">
            {sector}
          </span>
        </div>
        <span className="text-blue-900 text-sm">{timePosted}</span>
      </div>
      <p className="sm:w-3/4 w-full mx-auto text-sm sm:text-base">{userInput}</p>
      <div className="flex w-full sm:w-3/4 text-sm sm:text-base mx-auto justify-between">
        <span className="flex gap-x-2 hover:bg-gray-100 cursor-pointer p-2 rounded-md">
          <Heart />
          {numOfLikes}
        </span>
        <span className="flex gap-x-2 hover:bg-gray-100 cursor-pointer p-2 rounded-md">
          <Eye />
          {numOfViews}
        </span>
        <span className="flex gap-x-2 hover:bg-gray-100 cursor-pointer p-2 rounded-md">
          <MessageSquare />
          {numOfComments} <span className="hidden sm:block">comments</span> 
        </span>
        <span className="flex gap-x-2 hover:bg-gray-100 cursor-pointer p-2 rounded-md">
          <Share2 />
          share
        </span>
      </div>
    </div>
  );
};

export default DiscussionForumCard;
