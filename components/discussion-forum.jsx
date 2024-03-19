"use client";
import React, { Suspense } from "react";
import discussionForumData from "@/dummyData/discussion-forum";
import DiscussionForumCard from "./discussion-forum-card";
const DiscussionForum = ({ activeTab }) => {
  const discussionForum = discussionForumData;
  return (
    <section
      className={
        activeTab === "discussion forum" ? "block" : "hidden lg:block w-3/4"
      }
    >
      <h2 className="bg-gray-100 hidden lg:block mb-5 font-bold text-2xl uppercase w-max p-2 text-red-400">
        Discussion Forum
      </h2>
      <article className="w-[90%] mx-auto">
        {discussionForum.map((forum) => {
          const {
            id,
            avatar,
            fname,
            lname,
            sector,
            userInput,
            timePosted,
            numOfLikes,
            numOfViews,
            numOfComments,
          } = forum;
          return (
            <Suspense
              key={id}
              fallback={
                <div className="w-full h-[186px] bg-gray-400 animate-pulse rounded-lg"></div>
              }
            >
              <DiscussionForumCard
                avatar={avatar}
                fname={fname}
                lname={lname}
                sector={sector}
                userInput={userInput}
                timePosted={timePosted}
                numOfLikes={numOfLikes}
                numOfViews={numOfViews}
                numOfComments={numOfComments}
              />
            </Suspense>
          );
        })}
      </article>
    </section>
  );
};

export default DiscussionForum;
