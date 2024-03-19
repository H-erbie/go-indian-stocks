"use client";

import React, { useState } from 'react'
import DiscussionForum from "@/components/discussion-forum";
import MarketStories from "@/components/market-stories";
import Tab from "@/components/tab";

const MainSection = () => {
    const [activeTab, setActiveTab] = useState("discussion forum");

  return (
    <div className="w-full sm:pt-4 h-screen overflow-y-scroll ">
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}/>
        <div className="w-full flex ">
        <DiscussionForum activeTab={activeTab}/>
        <MarketStories activeTab={activeTab}/>
        </div>
      </div>
  )
}

export default MainSection