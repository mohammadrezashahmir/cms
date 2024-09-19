import React, {useRef, useState} from 'react';
import {sendDataToServer} from "../services/api";
import {toast} from "react-toastify";

const useComment = (dispatch) => {
    const contentElement = useRef(null)
    const [data, setData] = useState({})
    const [replyWho, setReplyWho] = useState(null)
    const addComment = (url, method = "POST") => {
        const sendData = {...data, content: contentElement.current.value.trim()}
        if (sendData.content) {
            sendDataToServer(url, sendData, method)
                .then((res) => {
                    contentElement.current.value = ''
                    toast.success(
                        <div className="text-lg font-medium">کامنت اضافه شد.</div>);
                    dispatch({type: 'add', newItem: res})
                    clear()
                })
                .catch((error) => {
                    toast.error(
                        <div className="text-lg font-medium">.خطایی رخ داده است</div>);
                });
        }
    }
    const clear = () => {
        setData(prevState => {
            return {...prevState, parent: null}
        })
        setReplyWho(null)
    }

    return (
        {
            contentElement,
            setData,
            addComment,
            setReplyWho,
            replyWho,
            clear
        }
    )
};

export default useComment;