'use client'

import { useState } from 'react'
import useSWR from 'swr'

const NewPost = ({ setPosts }) => {
    const { data: session } = useSWR('/api/auth/session')
    const [state, setState] = useState({ body: '' })

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                body: state.body,
                id: session?.user?.name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setPosts((prev) => [json, ...prev])
                setState({ body: '' })
            });
    }

    return (
        <div className="flex flex-col mb-4 w-full p-4 rounded-xl">
            <form className="mb-8 bg-gray-800 px-4 py-6 lg:py-8 lg:px-12 rounded-xl" onSubmit={handleSubmit}>
                <label className="block text-lg lg:text-xl mb-4">Create a new post</label>
                <textarea
                    name="body"
                    onChange={handleChange}
                    value={state.body}
                    placeholder={`What's on your mind?`}
                    className="w-full py-2 px-3 border rounded-xl text-gray-800 placeholder:text-gray-400 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 focus:ring-offset-2"
                    rows={4}
                />
                <button type='submit' className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-xl">
                    Create Post
                </button>
            </form>
        </div>
    )
}

export default NewPost
