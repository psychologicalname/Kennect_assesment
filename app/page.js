'use client'

import { useState } from "react";

import Welcome from "@/components/Welcome";
import HomePage from "@/components/HomePage";
import Users from "@/components/Users";
import { SWRConfig } from 'swr'
import Posts from "@/components/Posts";
import Searchbar from "@/components/Searchbar";

const Home = () => {

  const [showHome, setShowHome] = useState(false);
  const [isClicked, setIsClicked] = useState('');
  const [search, setSearch] = useState('')

  const handleNameSubmit = () => {
    setShowHome(true);
  };

  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <div className="">
        {showHome ? (
          <main className="py-4 md:px-8 lg:px-24 px-4">
            <div className="grid grid-rows-8 md:grid-cols-8 gap-4 mt-12">
              <div className="row-span-3 md:col-span-2 overflow-hidden">
                <Users setIsClicked={setIsClicked} />
              </div>
              <div className="row-span-5 md:col-span-6">
                <div className="lg:hidden block">
                  <Searchbar search={search} setSearch={setSearch} />
                  <HomePage />
                </div>
                <div className="lg:flex hidden items-center justify-between">
                  <HomePage />
                  <Searchbar search={search} setSearch={setSearch} />
                </div>
                <Posts userId={isClicked} search={search} />
              </div>
            </div>
          </main>
        ) : (
          <Welcome onSubmit={handleNameSubmit} />
        )}
      </div>
    </SWRConfig>
  );
};

export default Home;
