'use client'

import { useEffect, useState } from "react";
import Comments from "./Comments";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import NewComment from "./NewComment";

const Post = ({ post }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (<div className="p-4">
        <div className="flex flex-col bg-gray-800 w-full p-4 rounded-xl">
            <div className="flex gap-4 items-center mb-6">
                <div className="rounded-full md:w-12 md:h-12 w-8 h-8 bg-gray-100">
                    <h1 className="text-violet-600 text-center align-middle translate-y-[15%] font-semibold md:text-3xl uppercase">{post.user.name[0]}</h1>
                </div>

                <h2 className="text-gray-50 overflow-hidden text-sm md:text-base lg:text-lg">{post.user.name}</h2>
            </div>

            <h3 className="text-gray-50 mb-6 md:text-base text-sm">{post.content}</h3>
            <hr className="mb-3 contrast-50 brightness-50 opacity-40" />
            <button className='flex items-center justify-end gap-1 md:text-sm text-xs text-gray-100' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                <span>Comments</span>
            </button>
            {isOpen ?
                <>
                    <hr className="my-3 contrast-50 brightness-50 opacity-40" />
                    <Comments post={post} />
                </>
                : null}

            <NewComment post={post} />
        </div>
    </div>
    )
}

export default Post
