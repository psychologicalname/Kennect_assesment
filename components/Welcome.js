'use client'

import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react"
import { signIn } from "next-auth/react"
import useSWR from 'swr';

const Welcome = ({ onSubmit }) => {
    const { data: session, isValidating } = useSWR('/api/auth/session')
    const [name, setName] = useState('');

    useEffect(() => {
        if (!isValidating) {
            if (!session.user?.name) {
                signIn(undefined, { callbackUrl: '/' })
            }
            else {
                onSubmit()
            }
        }
    }, [session])

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name);
    };

    return (
        <></>
        // <form onSubmit={handleSubmit} className="container mx-auto p-4 flex flex-col items-center justify-center h-screen">
        //     <label className="text-2xl font-bold mb-4">What's your name?</label>
        //     <input
        //         type="text"
        //         value={name}
        //         onChange={(e) => setName(e.target.value)}
        //         className="w-96 p-2 border rounded-md mb-8 text-gray-800 text-lg"
        //     />
        //     <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        //         Continue
        //     </button>
        // </form>
    );
};

export default Welcome;
