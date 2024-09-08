import React, {useState} from 'react';
import {getRelativeTime} from "@/services/helper";
import {getDataFromServer} from "@/services/api";

const CommentItem = ({comment, setData}) => {
    const [replies, setReplies] = useState([]);
    const [showReplies, setShowReplies] = useState(false);
    const showRepliesHandler = (parent_id) => {
        if (!showReplies && !replies.length) {
            try {
                getDataFromServer(`/api/posts/comments/?parent_id=${parent_id}`)
                    .then(res => {
                        setReplies(res)
                    })
            } catch (error) {
                console.error("Error fetching replies:", error);
            }
        }
        setShowReplies(prevState => !prevState);

    }
    return (
        <div className="mt-5 pt-5 border-t border-gray-200 dark:border-dark-5">
            <div className="flex">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-none image-fit">
                    <img alt="عکس کاربر " className="rounded-full"
                         src={comment.author.image}/>
                </div>
                <div className="mr-3 flex-1">
                    <div className="flex items-center">
                        <div className="font-medium">{comment.author.username}</div>
                        <button onClick={() => setData(prevState => {
                            return {...prevState, parent: comment.id}
                        })} className=" btn btn-rounded-secondary w-24  mr-auto text-xs text-gray-600">پاسخ دادن
                        </button>
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm">{getRelativeTime(comment.date)}</div>
                    <div className="mt-2">
                        {comment.content}
                    </div>
                </div>
            </div>
            {showReplies &&
                <div className="replies box  mx-5">
                    {replies.map(reply => (
                        <CommentItem comment={reply} key={reply.id} setData={setData}/>
                    ))}
                </div>
            }
            {comment?.replies?.length &&
                <div className="replies box  mx-5">
                    {comment.replies && comment.replies.map(reply => (
                        <CommentItem comment={reply} key={reply.id} setData={setData}/>
                    ))}
                </div>
            }
               {
                comment.reply_count > 0 &&
                <div className='flex justify-center mt-2'>
                    <button className="btn btn-rounded-secondary w-24 ml-1 mb-2"
                            onClick={() => showRepliesHandler(comment.id)}>   {showReplies ? `بستن` : `${comment.reply_count} پاسخ`}</button>
                </div>
            }
        </div>
    );
};

export default CommentItem;