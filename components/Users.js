'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';

const Users = ({ setIsClicked }) => {
    const { data: users } = useSWR(`/api/users`)
    const [activeUserId, setActiveUserId] = useState(null);

    const handleUserClick = (userId) => {
        setIsClicked(userId);
        setActiveUserId(userId);
    };

    return (
        <main className="bg-gray-800 py-4 md:py-8 md:pl-6 md:pr-4 h-fit px-4 rounded-xl">
            <div className="flex w-screen overflow-x-auto scroll-smooth md:flex-col items-center md:items-start pr-12">
                {users && users?.map((user, index) => (
                    <button
                        key={index}
                        onClick={() => handleUserClick(user.name)}
                        className={`flex md:flex-row flex-col gap-2 md:gap-4 items-center justify-center mx-3 md:mb-6 ${activeUserId === user.name
                            ? 'border-l-4 border-indigo-500 pl-2 transition ease-in-out delay-150 duration-300'
                            : ''
                            }`}
                    >
                        <div className={`rounded-full lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 bg-gray-100`}>
                            <h1 className="text-violet-600 text-center align-middle translate-y-[15%] font-semibold md:text-2xl lg:text-3xl uppercase">
                                {user.name[0]}
                            </h1>
                        </div>

                        <h2 className="text-gray-100 text-[8px] md:text-[10px] lg:text-base">{user.name}</h2>
                    </button>
                ))}
            </div>
        </main>
    );
};

export default Users;
