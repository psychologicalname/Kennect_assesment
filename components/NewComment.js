import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSWR from "swr";

const NewComment = ({ post }) => {
    const { data: session, isValidating } = useSWR('/api/auth/session')
    const [state, setState] = useState({ body: '' })

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                body: state.body,
                post_id: post.id,
                id: session.user?.name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setState({ body: '' })
            });
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return (
        <div className="mt-6 flex justify-end items-center">
            <form onSubmit={handleSubmit} className="flex items-center justify-end gap-2">
                <input
                    type="text"
                    name="body"
                    onChange={handleChange}
                    value={state.body}
                    placeholder="Write a comment"
                    className="w-full py-2 px-3 border rounded-full text-gray-800 placeholder:text-gray-400 shadow-sm focus:outline-none bg-gray-100"
                />
                <button type="submit" className="text-xl"><IoMdSend /></button>
            </form>
        </div>
    )
}

export default NewComment
