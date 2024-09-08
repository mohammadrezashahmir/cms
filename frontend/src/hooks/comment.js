import React, {useRef, useState} from 'react';
import {sendDataToServer} from "@/services/api";
import {toast} from "react-toastify";

const useComment = (dispatch) => {
    const contentElement = useRef(null)
    const [data, setData] = useState({})
    const addComment = (url, method = "POST") => {
        const sendData = {...data, content: contentElement.current.value.trim()}
        if (sendData.content) {
            sendDataToServer(url, sendData, method)
                .then((res) => {
                    contentElement.current.value = ''
                    toast.success(res.detail ||
                        <div className="text-lg font-medium">کامنت اضافه شد.</div>);
                    dispatch({type:'add',newItem:res})
                })
                .catch((error) => {
                    toast.error(error.response?.data?.detail ||
                        <div className="text-lg font-medium">.خطایی رخ داده است</div>);
                });
        }
    }

    return (
        {
            contentElement,
            setData,
            addComment,
            data
        }
    )
};

export default useComment;