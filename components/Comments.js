import { useState, useEffect } from 'react';
import useSWR from "swr";

const Comments = ({ post }) => {
    const { data: allComments } = useSWR(`/api/comments?id=${post.id}`);
    const [comments, setComments] = useState([]);

    return (
        <div>
            {
                allComments && allComments?.map((comment, index) => (
                    <div key={index} className='flex items-center justify-start gap-4 mb-2 mt-4'>
                        <div className="rounded-full w-8 h-8 bg-gray-100">
                            <h1 className="text-violet-600 text-center align-middle translate-y-[10%] font-semibold text-xl uppercase">{comment.user.name[0]}</h1>
                        </div>
                        <div className='bg-gray-700 opacity-90 rounded-xl px-6 py-1'>
                            <h2 className="text-gray-50 font-semibold text-sm md:text-base mb-1">{comment.user.name}</h2>
                            <h3 className='text-[8px] md:text-sm text-gray-100 mb-2'>{comment.content}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments
