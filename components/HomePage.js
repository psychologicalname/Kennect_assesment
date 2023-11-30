'use client'

import useSWR from 'swr';

const Home = () => {
    const { data: session, isValidating } = useSWR('/api/auth/session')

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Welcome, {session?.user?.name}!</h1>
        </div>
    );
};

export default Home;
