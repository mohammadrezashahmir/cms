import React, {useContext, useEffect, useReducer, useState} from 'react';
import CommentItem from "@/components/comments/commentItem";
import {userContext} from "@/context/UserContext";
import useComment from "@/hooks/comment";
import {FaRegComment} from "react-icons/fa";

const commentReducer = (state, {type, newItem = null, id = null}) => {
    const addReply = (comments, parentId, reply) => {
        return comments.map(comment => {
            if (comment.id === parentId) {
                const updatedReplies = comment.replies ? [...comment.replies, reply] : [reply];
                return {...comment, replies: updatedReplies};
            } else if (comment.replies && comment.replies.length > 0) {
                return {...comment, replies: addReply(comment.replies, parentId, reply)};
            }
            return comment;
        });
    };


    switch (type) {
        case 'add':
            if (newItem.parent === null) {
                console.log([...state, newItem])
                return [newItem,...state];
            } else {
                return addReply(state, newItem.parent, newItem);
            }
        case 'delete':
            const filtered = state.filter(item => item.id !== id);
            return [...filtered];
        default:
            return state;
    }
};

const CommentContainer = ({itemId, itemComment, url, totalComment}) => {
    const currentUser = useContext(userContext)
    const [comments, dispatch] = useReducer(commentReducer, itemComment)
    const {
        contentElement,
        addComment,
        setData,
        data
    } = useComment(dispatch)
    useEffect(() => {
        setData({
            post: itemId,
            author: currentUser.id,
            parent: null,
        })
    }, [itemId, currentUser.id])
    return (
        <>
            <div className="intro-y mt-5 pt-5 border-t border-gray-200 dark:border-dark-5">
                <div className="text-base sm:text-lg font-medium">{totalComment} کامنت</div>
                <div className="news__input relative mt-5">
                    <div
                        className="w-4 h-4 absolute my-auto inset-y-0 right-0   w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center  mr-2 text-gray-800 zoom-in tooltip"
                        onClick={() => addComment(url)}
                    >
                        <FaRegComment className='feather  fill-current' size={'20px'}/>
                    </div>
                    <textarea
                        ref={contentElement}
                        className="form-control border-transparent bg-gray-200 pr-16 py-6 placeholder-theme-8 resize-none"
                        rows="1" placeholder="نظر خود را بنویسید..."></textarea>
                    <span>
                        {data.parent && `در حال پاسخ دادن به ${data.author}`}
                    </span>

                </div>
            </div>
            <div className="intro-y mt-5 pb-10">
                {comments.map(comment => <CommentItem comment={comment} key={comment.id} setData={setData}/>)}
            </div>
        </>
    );
};

export default CommentContainer;